import React from "react";
import FormLabel from "../FormLabel";
import FormSelect from "../FormSelect";
import { Button } from "../../ui/button";

const Categories = ["fashion", "tech"];

const ProductForm = () => {
  return (
    <>
      <form className="w-full h-full flex flex-col gap-4 p-8 sm:p-12 lg:p-16 items-center justify-center bg-white">
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
            selectLabel="Category"
            values={Categories}
            name={"Category"}
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
          htmlFor="photo"
          id="photo"
          title="photo"
          labelname="photo"
          type="file"
          placeholderText="Select  a photo"
        />
        <Button className="w-full mt-4">Create Product</Button>
      </form>
    </>
  );
};

export default ProductForm;
