import { getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/db";
import RemoveFromCart from "../product/RemoveFromCartButton";

export async function decreaseQuantity(productId: string, quantity: number) {
  "use server";
  const cart = await getCart();

  if (!cart || !Number(productId)) return;

  const cartExist = cart.CartItem.find((item) => item.id === Number(productId));

  if (quantity === 0) {
    if (cartExist) {
      await prisma.cartItem.delete({
        where: { id: cartExist.id },
      });
    }
  }
}
