import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import LeftSide from "../../Components/HomeLayout/LeftSide";
import RightSide from "../../Components/HomeLayout/RightSide";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-[1440px] mx-auto px-4">
        <Navbar />
        <div className="grid grid-cols-12 gap-6 pb-8">
          <aside className="col-span-3">
            <LeftSide />
          </aside>

          <section className="col-span-6">
            <Outlet />
          </section>

          <aside className="col-span-3">
            <RightSide />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Root;
