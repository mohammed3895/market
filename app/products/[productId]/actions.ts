"use server";
import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/db";
import { revalidatePath } from "next/cache";

export async function increaseQuantity(productId: string) {
  "use server";
  const cart = (await getCart()) ?? (await createCart());

  const cartExist = cart.CartItem.find((item) => item.id === Number(productId));

  if (cartExist) {
    await prisma.cartItem.update({
      where: { id: cartExist.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: Number(productId),
        quantity: 1,
      },
    });
  }

  revalidatePath("/products/[id]");
}
