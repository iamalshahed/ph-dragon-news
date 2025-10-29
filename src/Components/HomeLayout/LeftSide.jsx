import React, { Suspense } from "react";
import AllCategories from "../AllCategories/AllCategories";

const LeftSide = () => {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-neutral-700 text-xl font-semibold">
          All Categories
        </h1>
      </div>

      <Suspense
        fallback={
          <div className="">
            <span className="loading loading-spinner text-neutral loading-xl"></span>
          </div>
        }
      >
        <AllCategories />
      </Suspense>
    </div>
  );
};

export default LeftSide;
