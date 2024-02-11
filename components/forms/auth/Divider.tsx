import React from "react";

const Divider = ({ content }: { content: string }) => {
  return (
    <div className="w-full flex items-center justify-between gap-2 my-4 text-sm">
      <div className="w-full h-px bg-gray-300" />
      {content}
      <div className="w-full h-px bg-gray-300" />
    </div>
  );
};

export default Divider;
