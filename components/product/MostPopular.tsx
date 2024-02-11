import Image from "next/image";
import React from "react";
import Cart from "@/public/assets/Saly.svg";
import { Smile } from "lucide-react";

const MostPopular = () => {
  return (
    <div className="py-44 px-10 my-12 flex flex-col lg:flex-row items-center justify-center gap-4">
      <Image
        src={Cart}
        alt=""
        height={500}
        width={500}
        className="w-2/3 md:w-80 lg:w-1/2"
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-wrap font-semibold text-center  tracking-wider capitalize text-gray-400 drop-shadow-lg pro_test">
          Enjoy your shopping time
          <br /> with us
        </h1>
      </div>
    </div>
  );
};

export default MostPopular;
