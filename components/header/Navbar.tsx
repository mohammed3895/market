import React from "react";
import Cart from "../cart/Cart";
import Image from "next/image";
import Store from "@/public/assets/store.svg";
import Link from "next/link";
import { getCart } from "@/lib/db/cart";
import { cn } from "@/lib/utils";
import UserMenu from "../user/UserMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const userId = user?.id as string;

  const cart = await getCart();

  return (
    <div
      className={cn(
        "h-16 w-full p-8 flex items-center justify-between bg-white sticky top-0 inset-x-0 z-50 text-primary"
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-center gap-1 text-lg font-normal uppercase"
        >
          <Image
            src={Store}
            alt=""
            width={200}
            height={200}
            className="w-7 h-7 text-primary"
          />{" "}
          <span className="pro_test tracking-widest hidden md:block">
            MARKET
          </span>
        </Link>
        <div className="hidden">NavItems</div>
        <div className="flex items-center space-x-4 lg:space-x-8">
          <UserMenu session={session} />
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
