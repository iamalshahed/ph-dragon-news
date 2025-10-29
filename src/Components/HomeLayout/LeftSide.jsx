import React, { Suspense } from "react";
import AllCategories from "../AllCategories/AllCategories";

const LeftSide = () => {
  return (
    <div>
      <div className="">
        <h1>All Categories</h1>
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
