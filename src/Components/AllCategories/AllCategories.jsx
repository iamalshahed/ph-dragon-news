import React, { use } from "react";
import { NavLink } from "react-router";

const allCategoriesPromies = fetch("/categories.json").then((res) =>
  res.json()
);

const AllCategories = () => {
  const allCategories = use(allCategoriesPromies);

  return (
    <div className="space-y-2 mb-8">
      {allCategories.map((category, index) => (
        <li key={index}>
          <NavLink
            style={{ display: "block" }}
            to={`/category/${category.id}`}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default AllCategories;
