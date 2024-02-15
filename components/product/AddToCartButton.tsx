"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState, useTransition } from "react";
import { buttonVariants } from "../ui/button";
import { toast } from "sonner";

interface AddToCartButtonProps {
  title: string;
  classname?: string;
  productId: string;
  ownerId: string;
  increaseQuantity: (productId: string, ownerId: string) => Promise<void>;
}

const AddToCartButton = ({
  title,
  classname,
  productId,
  ownerId,
  increaseQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransision] = useTransition();
  const [sucsses, setSucces] = useState(false);

  return (
    <>
      <button
        className={cn(buttonVariants({ variant: "default" }), classname)}
        onClick={() => {
          setSucces(false);
          startTransision(async () => {
            await increaseQuantity(productId, ownerId), setSucces(true);
          });
        }}
      >
        {title}
      </button>
      {isPending && sucsses && toast("Added to cart sucssesfuly")}
    </>
  );
};

export default AddToCartButton;
