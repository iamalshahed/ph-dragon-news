import React from "react";
import SocialLogin from "./SocialLogin";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSide = () => {
  const loginBtnInfo = [
    {
      icon: <FcGoogle size={25} />,
      label: "Continue with Google",
    },
    {
      icon: <FaGithub size={25} />,
      label: "Continue with Github",
    },
  ];

  return (
    <div>
      <div>
        <div className="mb-5">
          <h1 className="text-neutral-700 text-xl font-semibold">Login With</h1>
        </div>

        <div>
          <SocialLogin loginBtnInfo={loginBtnInfo} />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
