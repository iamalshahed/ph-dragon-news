import React, { use } from "react";

const allCategoriesPromies = fetch("/categories.json").then((res) =>
  res.json()
);

const AllCategories = () => {
  const allCategories = use(allCategoriesPromies);
  console.log(allCategories);

  return <div>categories... {allCategories.length}</div>;
};

export default AllCategories;
