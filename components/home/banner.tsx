import Image from "next/image";
import Macbook from "@/public/assets/macbook.png";
import Btn from "../btn";

const Banner = () => {
  return (
    <div className="w-full px-12 lg:p-20 py-20 my-12 bg-primary shadow-md rounded-xl flex flex-col lg:flex-row gap-8 text-center items-center justify-between">
      <Image
        src={Macbook}
        alt=""
        width={400}
        height={400}
        className="w-60 lg:w-96 h-auto"
      />
      <div className="flex flex-col items-center gap-6 text-white">
        <h1 className="text-2xl sm:text-3xl lg:text-6xl font-black uppercase">
          New macbook air
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl font-normal">
          Exclusive 25% discount for 1st 20 customers
        </p>
        <Btn
          btnVariant="secondary"
          title="Claim your offer"
          classname="text-primary text-base font-medium"
        />
      </div>
    </div>
  );
};

export default Banner;
