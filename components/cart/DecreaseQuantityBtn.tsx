"use client";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React, { useState, useTransition } from "react";
import { buttonVariants } from "../ui/button";
import { toast } from "sonner";

interface AddToCartButtonProps {
  productId: string;
  quantity: number;
  userId: string;
  ownerId: string;
  decreaseQuantity: (productId: string, ownerId: string) => Promise<void>;
}

const DecreaseQuantityBtn = ({
  productId,
  ownerId,
  decreaseQuantity,
}: AddToCartButtonProps) => {
  const [isPending, startTransision] = useTransition();
  const [sucsses, setSucces] = useState(false);

  return (
    <>
      <button
        className={cn(buttonVariants({ variant: "secondary" }))}
        onClick={() => {
          startTransision(async () => {
            await decreaseQuantity(productId, ownerId), setSucces(true);
          });
        }}
      >
        -
      </button>
    </>
  );
};

export default DecreaseQuantityBtn;
