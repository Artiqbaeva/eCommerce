import React from "react";

const DetailProductSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 mt-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md h-[400px]">
          <div className="w-full h-full bg-gray-200 rounded-lg"></div>
        </div>
        <div className="space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2"></div>
          <div className="h-24 bg-gray-200 rounded w-full mt-4"></div>
          <div className="flex gap-4 mt-6">
            <div className="h-10 w-36 bg-gray-300 rounded-full"></div>
            <div className="h-10 w-36 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductSkeleton;
