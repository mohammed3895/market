import React from "react";
import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="bg-white p-0 rounded-lg shadow-md relative w-[360px]">
      <Skeleton className="w-full h-72 rounded-t-lg bg-gray-300" />
      <div className="flex flex-col items-start justify-start gap-2 p-4 mt-4 w-full">
        <div className="px-5 py-3 felx items-center justify-center rounded-full  bg-muted-foreground shadow-md">
          <Skeleton className="h-2 w-8 rounded-full animate-pulse bg-gray-100" />
        </div>
        <Skeleton className="bg-zinc-900 w-3/4 h-4" />
        <Skeleton className="px-3 py-1 mt-2 rounded-full text-sm bg-muted-foreground w-3/4 h-4" />
        <Skeleton className="w-1/2 bg-muted-foreground h-4" />
        <div className="mt-6 flex flex-row items-center justify-between w-full gap-2">
          <Skeleton className="px-4 py-2 w-full h-8 rounded-lg bg-gray-600 mt-2" />
          <Skeleton className="px-4 py-2 w-full h-8 rounded-lg bg-gray-600 mt-2" />
        </div>
      </div>
      <div className="px-6 py-4 felx items-center justify-center absolute top-4 rounded-full right-4 bg-white shadow-md">
        <Skeleton className="h-2 w-8 rounded-full animate-pulse bg-primary" />
      </div>
    </div>
  );
};

export default SkeletonCard;
