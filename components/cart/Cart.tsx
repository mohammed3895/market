"use server";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "@/lib/db/cart";
import Image from "next/image";
import Btn from "../btn";
import RemoveFromCart from "../product/RemoveFromCartButton";
import { decreaseQuantity } from "./actions";

interface CartProps {
  cart: ShoppingCart | null;
}

const Cart = ({ cart }: CartProps) => {
  return (
    <Sheet>
      <SheetTrigger className="relative">
        <span className="w-5 h-5 border-2 border-white p-1 flex items-center justify-center text-xs font-medium rounded-full absolute -top-2 -right-2 bg-muted-foreground text-white">
          {cart?.size || 0}
        </span>
        <ShoppingBag className="w-6 h-6 text-muted-foreground" />
      </SheetTrigger>
      <SheetContent className="w-[400px] lg:w-[700px]">
        <h1>
          {cart?.CartItem.map((item) => (
            <div
              key={item.product.id}
              className="w-full p-4 m-4 rounded-lg shadow-sm flex flex-col items-start justify-start gap-2"
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
              </div>
              <div className="flex items-center justify-between w-full">
                <span className="text-base capitalize font-medium text-gray-700">
                  {item.quantity}
                </span>
                <RemoveFromCart
                  decreaseQuantity={decreaseQuantity}
                  quantity={item.quantity}
                  productId={item.product.id as unknown as string}
                />
              </div>
              <Btn btnVariant="default" title="Checkout" classname="w-full" />
            </div>
          ))}
        </h1>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
