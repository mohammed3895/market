import React from "react";
import { Button } from "./ui/button";

interface ButtonProps {
  onClick?: () => void;
  btnVariant: [
    "default",
    "ghost",
    "outline",
    "secondary",
    "destructive",
    "link",
    null,
    undefined
  ][number];
  classname?: string;
  title: string;
}

const Btn = ({ onClick, btnVariant, classname, title }: ButtonProps) => {
  return (
    <Button onClick={onClick} variant={btnVariant} className={classname}>
      {title}
    </Button>
  );
};

export default Btn;
