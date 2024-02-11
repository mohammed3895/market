import SignUpForm from "@/components/forms/auth/SignUpForm";
import Image from "next/image";
import React from "react";
import Marni from "@/public/assets/Marni.svg";

const SignUp = () => {
  return (
    <div className="p-4 lg:p-12 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-0 shadow-md">
        <SignUpForm />
        <div className="flex flex-col items-center justify-center gap-8 p-8 w-full h-full m-0 bg-primary">
          <Image src={Marni} alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
