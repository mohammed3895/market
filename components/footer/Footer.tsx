import Link from "next/link";
import React from "react";
import { Input } from "../ui/input";
import Btn from "../btn";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <>
      <div className="w-full py-16 px-0 lg:px-8 border-t flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
        <div className="flex items-start justify-between w-2/3">
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-lg font-bold text-primary">Ctegories</h3>
            <ul className="text-sm text-muted-foreground capitalize tracking-wider font-medium">
              <li className="mt-1 hover:text-primary">
                <Link href="/">Fashion</Link>
              </li>
              <li className="mt-1 hover:text-primary">
                <Link href="/">Tech</Link>
              </li>

              <li className="mt-1 hover:text-primary">
                <Link href="/">Other</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-lg font-bold text-primary">Legal</h3>
            <ul className="text-sm text-muted-foreground capitalize tracking-wider font-medium">
              <li className="mt-1 hover:text-primary">
                <Link href="/">Privacy & Policy</Link>
              </li>
              <li className="mt-1 hover:text-primary">
                <Link href="/">Terms of Use</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h3 className="text-lg font-bold text-primary">Pages</h3>
            <ul className="text-sm text-muted-foreground capitalize tracking-wider font-medium">
              <li className="mt-1 hover:text-primary">
                <Link href="/">Home</Link>
              </li>
              <li className="mt-1 hover:text-primary">
                <Link href="/">Products</Link>
              </li>
              <li className="mt-1 hover:text-primary">
                <Link href="/">FAQ</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-start justify-start gap-4 ml-0 lg:ml-32">
          <h3 className="text-lg font-bold uppercase text-primary">
            Subscribe to our newsletter
          </h3>
          <Input type="email" placeholder="Enter your email address" />
          <Btn btnVariant="default" title="Subscribe Now" />
        </div>
      </div>
      <Separator />
      <div className="flex items-center justify-center py-4 w-full">
        <p className="text-base font-medium text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary">Mo Sameer</span>. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
