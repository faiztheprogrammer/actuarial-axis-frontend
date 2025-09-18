import React from "react";

function JobSkeleton() {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm animate-pulse">
      <div className="flex justify-between items-start">
        <div className="w-3/4">
          <div className="h-5 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
        </div>
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[...Array(3)].map((_, idx) => (
          <span
            key={idx}
            className="h-5 w-12 bg-gray-200 rounded-full"
          ></span>
        ))}
      </div>
    </div>
  );
}

export default JobSkeleton;
