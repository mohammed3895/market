import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface FormProps {
  htmlFor: string;
  title: string;
  type: string;
  id: string;
  labelname: string;
  placeholderText?: string;
}

const FormLabel = ({
  htmlFor,
  title,
  type,
  id,
  labelname,
  placeholderText,
}: FormProps) => {
  return (
    <div className="w-full flex flex-col gap-2 items-start justify-start">
      <Label htmlFor={htmlFor} className="text-base capitalize font-medium">
        {title}
      </Label>
      <Input
        required
        type={type}
        id={id}
        name={labelname}
        placeholder={placeholderText}
      />
    </div>
  );
};

export default FormLabel;
