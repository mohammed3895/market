import { Prisma } from "@prisma/client";
import prisma from "./db";
import { cookies } from "next/dist/client/components/headers";

export type cartWithProducts = Prisma.CartGetPayload<{
  include: { CartItem: { include: { product: true } } };
}>;

export type ShoppingCart = cartWithProducts & {
  size: number;
  subTotalPrice: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("cart")?.value;

  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: Number(localCartId) },
        include: { CartItem: { include: { product: true } } },
      })
    : null;

  if (!cart) return null;

  return {
    ...cart,
    size: cart.CartItem.reduce((acc, i) => acc + i.quantity, 0),
    subTotalPrice: cart.CartItem.reduce(
      (acc, i) => acc + i.quantity * i.product.price,
      0
    ),
  };
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  cookies().set("cart", newCart.id as unknown as string);

  return {
    ...newCart,
    CartItem: [],
    size: 0,
    subTotalPrice: 0,
  };
}
