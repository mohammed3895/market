import React from "react";
import MostPopular from "./MostPopular";
import prisma from "@/lib/db/db";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import List from "./List";
import { ProductCardProps } from "./ProductCard";

const ProductList = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h1 className="text-2xl text-center font-medium tracking-wide text-primary capitalize my-12 mx-auto w-fit py-4 border-b">
        New Trends
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 my-12">
        {products.slice(0, 4).map((product: ProductCardProps, i: number) => (
          <List index={i} product={product} key={product.id} />
        ))}
      </div>
      <Link
        href="/products"
        className={cn(
          buttonVariants({ variant: "secondary" }),
          "mt-12 w-full md:w-1/2 self-center"
        )}
      >
        Browse more
      </Link>

      <MostPopular />
    </section>
  );
};

export default ProductList;
