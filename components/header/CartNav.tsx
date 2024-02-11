import { getCart } from "@/lib/db/cart";
import React from "react";
import Cart from "../cart/Cart";

const CartNav = async () => {
  const cart = await getCart();

  return (
    <div>
      <Cart cart={cart} />
    </div>
  );
};

export default CartNav;
