import SignInForm from "@/components/forms/auth/SignInForm";
import Image from "next/image";
import Ikbal from "@/public/assets/Ikbal.svg";

const SignIn = () => {
  return (
    <div className="p-4 lg:p-12 w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-0 shadow-md">
        <SignInForm />
        <div className="flex flex-col items-center justify-center gap-8 p-8 w-full h-full m-0 bg-gradient-to-bl from-fuchsia-800 to-primary">
          <Image
            src={Ikbal}
            alt=""
            width={500}
            height={500}
            className=" drop-shadow-3xl shadow-slate-50"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
