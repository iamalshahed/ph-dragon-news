import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router";
import { format } from "date-fns";
import LatestNews from "../LatestNews/LatestNews";

const Header = () => {
  return (
    <header className="pt-4 pb-[30px] sm:pt-12">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        {/* image */}
        <div className="w-full inline-flex justify-center">
          <Link to="/">
            <img
              className="w-[250px] sm:w-[471px] h-auto"
              src={assets.logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* slogan and current date */}
        <div className="text-center space-y-2.5 mt-5">
          <p className="text-neutral-500 text-lg font-normal">
            Journalism Without Fear or Favour
          </p>

          {/* date */}
          <div className="flex items-center justify-center gap-1">
            <p>
              <span className="text-neutral-700 text-xl font-medium">
                {format(new Date(), "EEEE,")}
              </span>
            </p>
            <p className="text-neutral-500 text-xl font-medium">
              {format(new Date(), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 mt-7">
        <LatestNews />
      </div>
    </header>
  );
};

export default Header;
