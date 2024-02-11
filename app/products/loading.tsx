import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const Loading = () => {
  return (
    <div className="py-12 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 place-content-center place-items-center">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
