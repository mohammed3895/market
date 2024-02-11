"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState, useTransition } from "react";
import { buttonVariants } from "../ui/button";
import { toast } from "sonner";

interface AddToCartButtonProps {
  productId: string;
  increaseQuantity: (productId: string) => Promise<void>;
}

const AddToCartButton = ({
  productId,
  increaseQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransision] = useTransition();
  const [sucsses, setSucces] = useState(false);

  return (
    <>
      <button
        className={cn(buttonVariants({ variant: "default" }), "w-full")}
        onClick={() => {
          setSucces(false);
          startTransision(async () => {
            await increaseQuantity(productId), setSucces(true);
          });
        }}
      >
        {isPending && (
          <Loader2 className="w-4 h-4 text-white animate-spin mr-2" />
        )}
        Add to cart
      </button>
      {isPending && sucsses && toast("Added to cart sucssesfuly")}
    </>
  );
};

export default AddToCartButton;
