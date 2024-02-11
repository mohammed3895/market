import { ShoppingCart } from "@/lib/db/cart";
import { ShoppingBag } from "lucide-react";
import React from "react";

interface CartProps {
  cart: ShoppingCart | null;
}

const CartButton = ({ cart }: CartProps) => {
  return (
    <div>
      <span className="w-5 h-5 border-2 border-white p-1 flex items-center justify-center text-xs font-medium rounded-full absolute -top-2 -right-2 bg-muted-foreground text-white">
        {cart!.size | 0}
      </span>
      <ShoppingBag className="w-6 h-6 text-muted-foreground" />
    </div>
  );
};

export default CartButton;
