import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="p-4 bg-zinc-100 flex flex-col sm:flex-row items-center gap-5">
      <div className="">
        <p className="px-6 py-2.5 text-white text-xl font-medium bg-rose-600">
          Latest
        </p>
      </div>
      <div className="">
        <Marquee className="flex gap-4 w-full" pauseOnHover speed={60}>
          <p className="text-neutral-700 text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nulla! Impedit nam, nobis placeat aspernatur nostrum saepe porro quaerat magnam aliquam praesentium architecto in aliquid ea est temporibus quisquam quas dolores cupiditate omnis labore. Distinctio tempore error illo odit vero assumenda aperiam expedita? Dolores ipsum molestias perspiciatis, autem temporibus optio.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
