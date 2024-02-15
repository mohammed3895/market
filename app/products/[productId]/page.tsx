import Btn from "@/components/btn";
import { Products } from "@/config/Products";
import { Star } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import prisma from "@/lib/db/db";
import AddToCartButton from "@/components/product/AddToCartButton";
import { increaseQuantity } from "./actions";
import List from "@/components/product/List";
import { getServerSession } from "next-auth";
import {config} from '@/auth'

type Props = {
  params: { productId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = searchParams.productId;
  console.log(id);

  // fetch data
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.productId) },
  });

  return {
    title: `Market - ${product?.name}`,
  };
}

const ProductDetails = async ({ params }: Props) => {
  const { productId } = params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(params.productId) },
  });
  const similarProducts = await prisma.product.findMany({
    where: { category: product?.category },
    take: 4,
  });

  const session = await getServerSession(config);
  const user = session?.user;

  const userId = user?.email as string;

  return (
    <div className="flex flex-col items-start justify-start gap-12">
      <div className="pb-16 flex flex-col lg:flex-row items-start justify-between gap-0 min-h-full">
        {product?.imageUrl && (
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-start gap-8">
            <Image
              src={product.imageUrl}
              alt={product!.name}
              height={500}
              width={500}
              className="w-full h-[50vh] lg:h-[75vh] object-cover"
            />
          </div>
        )}

        {/*  RIGHT SIDE OF THE PRODUCT DETAILS PAGE */}
        {product && (
          <div className="py-8 px-8 lg:px-44 w-full h-[75vh] lg:w-1/2  flex flex-col items-start justify-center">
            <div className="flex flex-col items-start justify-start gap-1 w-full mt-6">
              <h3 className="text-xl font-normal tracking-wide uppercase text-muted-foreground">
                {product?.category}
              </h3>
              <h1 className="text-3xl font-bold tracking-wide uppercase text-zinc-900">
                {product?.name}
              </h1>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 mt-2">
              <Star className="w-4" />
              <Star className="w-4" />
              <Star className="w-4" />
              <Star className="w-4" />
              <Star className="w-4" />
            </div>
            <span className="my-6 text-4xl font-normal tracking-wide pro_test">
              $ {product?.price}
            </span>
            <p className="text-base text-muted-foreground font-normal mt-6">
              {product?.description}
            </p>
            {/* COLORS */}
            <div className="flex items-center justify-start gap-4 mt-6">
              <span className="w-8 h-8 rounded-full bg-red-400" />
              <span className="w-8 h-8 rounded-full bg-yellow-400" />
              <span className="w-8 h-8 rounded-full bg-gray-600" />
            </div>
            <div className="my-6 w-1/3">
              <AddToCartButton
                title="Add to cart"
                increaseQuantity={increaseQuantity}
                ownerId={userId}
                productId={product.id as unknown as string}
              />
            </div>
          </div>
        )}
      </div>
      <div className=" py-16">
        <h1 className="text-2xl text-center font-medium tracking-wide text-primary capitalize my-12 mx-auto w-fit py-4 border-b">
          Similar Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {similarProducts.map((product, i) => (
            <List index={i} product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
