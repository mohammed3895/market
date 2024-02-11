import React from "react";
import Btn from "../btn";

const Hero = () => {
  return (
    <div className="w-ful flex items-center justify-between px-8 lg:px-16 py-6 lg:py-12">
      <div className="flex flex-col items-center text-center justify-start">
        <h1 className="text-3xl lg:text-5xl font-medium tracking-wider text-primary pro_test">
          Maket Online Store
        </h1>
        <p className="text-sm lg:text-base capitalize font-normal text-muted-foreground mt-2">
          Online market place for digital products.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <Btn
            btnVariant="default"
            title="Browse Trending"
            classname="text-white text-base font-medium"
          />
          <Btn
            btnVariant="secondary"
            title="New Arrivals"
            classname="text-primary text-base font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
