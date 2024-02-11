import React from "react";
import FormLabel from "../FormLabel";
import { Button } from "@/components/ui/button";
import Google from "@/public/assets/google.svg";
import Image from "next/image";
import Divider from "./Divider";
import AuthSwitch from "./authSwitch";

const SignInForm = () => {
  return (
    <>
      <form className="w-full h-full flex flex-col gap-4 p-8 sm:p-12 lg:p-16 items-center justify-center bg-white">
        <h3 className="text-primary text-2xl lg:text-4xl font-medium mb-12">
          Signin to your Account
        </h3>
        <FormLabel
          htmlFor="email"
          id="email"
          title="email"
          labelname="email"
          type="email"
          placeholderText="Example@mail.com"
        />
        <FormLabel
          htmlFor="password"
          id="password"
          title="password"
          labelname="password"
          type="password"
          placeholderText="*********"
        />
        <Button className="w-full mt-4">Sign in</Button>
        <AuthSwitch
          text="Don't have Account ?"
          href="/auth/sign-up"
          link="Signup"
        />
        <Divider content="OR" />
        <Button
          variant="secondary"
          className="text-sm font-medium text-stone-800"
        >
          <Image
            src={Google}
            alt="google"
            width={20}
            height={20}
            className="mr-4"
          />
          Continue with Google
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
