import React from "react";

const PostSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md animate-pulse"
        >
          <div className="h-40 w-[260px] bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
          <div className="h-20 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        </div>
      ))}
    </div>
  );
};

export default PostSkeleton;