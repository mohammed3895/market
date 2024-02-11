import ProductForm from "@/components/forms/products/ProductForm";
import Image from "next/image";
import React from "react";
import ProductChart from "@/public/assets/productChart.svg";
import FormLabel from "@/components/forms/FormLabel";
import FormSelect from "@/components/forms/FormSelect";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db/db";
import { redirect } from "next/navigation";

const Categories = ["fashion", "tech"];

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const category = formData.get("category")?.toString();

  if (!name || !description || !imageUrl || !price || !category) {
    throw new Error("All fields are required");
  }

  const product = await prisma.product.create({
    data: { name, description, imageUrl, price, category },
  });

  redirect("/products");
}

const CreateProduct = () => {
  return (
    <div className="p-4 lg:p-12 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-0 shadow-md">
        <form
          action={addProduct}
          className="w-full h-full flex flex-col gap-4 p-8 sm:p-12 lg:p-16 items-center justify-center bg-white"
        >
          <h3 className="text-primary text-2xl lg:text-4xl font-medium mb-12">
            Create a new product
          </h3>
          <FormLabel
            htmlFor="name"
            id="name"
            title="name"
            labelname="name"
            type="text"
            placeholderText="Product Name"
          />
          <FormLabel
            htmlFor="description"
            id="description"
            title="description"
            labelname="description"
            type="text"
            placeholderText="Description"
          />
          <div className="w-full flex items-center justify-between gap-6">
            <FormSelect
              name="category"
              selectLabel="Category"
              values={Categories}
            />
            <FormLabel
              htmlFor="price"
              id="price"
              title="price"
              labelname="price"
              type="number"
            />
          </div>
          <FormLabel
            htmlFor="imageUrl"
            id="imageUrl"
            title="imageUrl"
            labelname="imageUrl"
            type="url"
            placeholderText="Select  a photo"
          />
          <Button type="submit" className="w-full mt-4">
            Create Product
          </Button>
        </form>
        <div className="flex flex-col items-center justify-center gap-8 p-8 w-full h-full m-0 bg-primary">
          <Image src={ProductChart} alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
