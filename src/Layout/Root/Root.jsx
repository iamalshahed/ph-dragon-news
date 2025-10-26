import React from "react";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1440px] mx-auto px-4">
        <LatestNews />
      </main>
    </div>
  );
};

export default Root;
