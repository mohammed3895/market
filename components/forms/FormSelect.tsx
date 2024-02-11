import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "../ui/label";

interface SelectProps {
  selectLabel?: string;
  values: string[];
  name: string;
}

const FormSelect = ({ selectLabel, values, name }: SelectProps) => {
  return (
    <div className="w-full flex flex-col gap-2 items-start justify-start">
      <Label className="text-base capitalize font-medium">{name}</Label>
      <Select name={name}>
        <SelectTrigger className="w-full p-[18px]">
          <SelectValue placeholder={"Category"} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {values.map((value, index) => (
              <SelectItem defaultValue={values[0]} key={index} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FormSelect;
