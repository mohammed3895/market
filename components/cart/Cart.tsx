"use server";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "@/lib/db/cart";
import Image from "next/image";
import Btn from "../btn";
import RemoveFromCart from "../product/RemoveFromCartButton";
import { decreaseQuantity } from "./actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddToCartButton from "../product/AddToCartButton";
import { increaseQuantity } from "@/app/products/[productId]/actions";

interface CartProps {
  cart: ShoppingCart | null;
}

const Cart = async ({ cart }: CartProps) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const userId = user?.id;

  return (
    <Sheet>
      <SheetTrigger className="relative">
        <span className="w-5 h-5 border-2 border-white p-1 flex items-center justify-center text-xs font-medium rounded-full absolute -top-2 -right-2 bg-muted-foreground text-white">
          {cart?.size || 0}
        </span>
        <ShoppingBag className="w-6 h-6 text-muted-foreground" />
      </SheetTrigger>
      <SheetContent className="w-[400px] lg:w-[700px]">
        <div className="mx-auto w-full">
          {cart?.CartItem.map((item) => (
            <div
              key={item.id}
              className="w-full p-4 mx-auto my-6 rounded-lg border flex flex-col items-start justify-start gap-2"
            >
              <Image
                src={item!.product.imageUrl}
                width={200}
                height={200}
                alt={item.product.name}
                className="w-28 h-28 rounded-md object-cover"
              />
              <div className="flex items-center justify-between w-full">
                <h1 className="text-lg capitalize font-medium text-gray-900">
                  {item.product.name}
                </h1>
                <span className="text-base capitalize font-medium text-gray-700">
                  {item.product.price * item.quantity}
                </span>
              </div>
              <div className="flex items-center justify-between w-full">
                <RemoveFromCart
                  decreaseQuantity={decreaseQuantity}
                  ownerId={userId!}
                  userId={userId!}
                  quantity={item.quantity}
                  productId={item.product.id as unknown as string}
                />
                <span className="text-base capitalize font-medium text-gray-700">
                  {item.quantity}
                </span>
                <AddToCartButton
                  increaseQuantity={increaseQuantity}
                  ownerId={userId!}
                  productId={item.product.id as unknown as string}
                  title="+"
                />
              </div>
              <Btn btnVariant="default" title="Checkout" classname="w-full" />
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
