import { Prisma } from "@prisma/client";
import prisma from "./db";
import { cookies } from "next/dist/client/components/headers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export type cartWithProducts = Prisma.CartGetPayload<{
  include: { CartItem: { include: { product: true } } };
}>;

export type ShoppingCart = cartWithProducts & {
  size: number;
  subTotalPrice: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const session = await getServerSession(authOptions);

  let cart: cartWithProducts | null;

  if (session) {
    cart = await prisma.cart.findFirst({
      where: { ownerId: session.user.email as string },
      include: { CartItem: { include: { product: true } } },
    });
  } else {
    return null;
  }

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

export async function createCart({
  ownerId,
}: {
  ownerId: string;
}): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: { ownerId: ownerId },
  });

  cookies().set("cart", newCart.id as unknown as string);

  return {
    ...newCart,
    CartItem: [],
    size: 0,
    subTotalPrice: 0,
  };
}
