import { createCart, getCart } from "@/lib/db/cart";
import prisma from "@/lib/db/db";
import { revalidatePath } from "next/cache";

export async function decreaseQuantity(productId: string, ownerId: string) {
  "use server";
  const cart = (await getCart()) ?? (await createCart({ ownerId: ownerId }));

  const cartExist = cart.CartItem.find(
    (item) => (item.product.id as unknown as string) === productId
  );

  if (!cartExist) {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId: Number(productId),
        quantity: 1,
      },
    });
  }

  if (cartExist?.quantity === 1) {
    await prisma.cartItem.delete({
      where: { id: cartExist.id },
    });
  } else {
    await prisma.cartItem.update({
      where: { id: cartExist?.id },
      data: { quantity: { decrement: 1 } },
    });
  }

  revalidatePath("/");
}
