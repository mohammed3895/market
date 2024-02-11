"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState, useTransition } from "react";
import { buttonVariants } from "../ui/button";
import { toast } from "sonner";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
  decreaseQuantity: (productId: string, quantity: number) => Promise<void>;
}

const RemoveFromCart = ({
  productId,
  quantity,
  decreaseQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransision] = useTransition();
  const [sucsses, setSucces] = useState(false);

  return (
    <>
      <button
        className={cn(buttonVariants({ variant: "default" }))}
        onClick={() => {
          startTransision(async () => {
            await decreaseQuantity(productId, quantity), setSucces(true);
          });
        }}
      >
        {isPending && (
          <Loader2 className="w-4 h-4 text-white animate-spin mr-2" />
        )}
        -
      </button>
      {/* {isPending && sucsses && toast("Added to cart sucssesfuly")} */}
    </>
  );
};

export default RemoveFromCart;
