import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-8 px-4 border-t flex items-start justify-between">
      <div className="flex flex-col items-start justify-start gap-2">
        <h3 className="text-base font-medium text-primary">Ctegories</h3>
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
        <h3 className="text-base font-medium text-primary">Legal</h3>
        <ul className="text-sm text-muted-foreground capitalize tracking-wider font-medium">
          <li className="mt-1 hover:text-primary">
            <Link href="/">Privacy & Policy</Link>
          </li>
          <li className="mt-1 hover:text-primary">
            <Link href="/">Terms of Use</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
