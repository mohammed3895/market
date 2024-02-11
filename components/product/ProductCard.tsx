import Image from "next/image";
import React from "react";
import Btn from "../btn";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import AddToCartButton from "./AddToCartButton";
import { increaseQuantity } from "@/app/products/[productId]/actions";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
}

const ProductCard = ({
  product,
  isVisible,
}: {
  product: ProductCardProps;
  isVisible: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-white p-0 rounded-lg shadow-sm relative invisible animate-in fade-in-5",
        { visible: isVisible }
      )}
    >
      <Image
        src={product.imageUrl}
        alt=""
        width={400}
        height={400}
        className="w-full h-72 rounded-t-lg object-cover"
      />
      <div className="flex flex-col items-start justify-start gap-2 p-4 mt-4">
        <span className="px-3 py-1 rounded-full text-sm bg-muted-foreground text-white">
          {product.category}
        </span>
        <h1 className="text-lg font-bold text-zinc-900 uppercase">
          {product.name}
        </h1>
        <p className="text-sm font-normal text-muted-foreground text-wrap line-clamp-2">
          {product.description}
        </p>
        <div className="mt-6 flex flex-row items-center justify-between w-full gap-2">
          <AddToCartButton
            productId={product.id as unknown as string}
            increaseQuantity={increaseQuantity}
          />
          <Link
            href={`/products/${product.id}`}
            className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
          >
            See Details
          </Link>
        </div>
      </div>
      <span className="px-4 py-2 felx items-center justify-center absolute top-4 right-4 bg-white shadow-md rounded-3xl text-base text-primary font-bold">
        ${product.price}
      </span>
    </div>
  );
};

export default ProductCard;
