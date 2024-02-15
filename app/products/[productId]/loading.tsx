import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center backdrop:blur-2xl">
      <Loader2 strokeWidth={1} className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default Loading;
