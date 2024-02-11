import React from "react";
import Banner from "./banner";
import Hero from "./hero";
import ProductList from "../product/ProductList";

const Landing = () => {
  return (
    <div className="w-ful flex flex-col items-center justify-center">
      <Hero />
      <Banner />
      <ProductList />
    </div>
  );
};

export default Landing;
