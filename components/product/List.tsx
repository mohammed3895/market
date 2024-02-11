"use client";
import React, { useEffect, useState } from "react";
import SkeletonCard from "../SkeletonCard";
import ProductCard, { ProductCardProps } from "./ProductCard";

interface ProductListingProps {
  product: ProductCardProps;
  index: number;
}

const List = ({ product, index }: ProductListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!product || !isVisible) return <SkeletonCard />;
  return <ProductCard product={product} isVisible={isVisible} />;
};

export default List;
