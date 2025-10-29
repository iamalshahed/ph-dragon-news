import React from "react";

const SocialLogin = ({ loginBtnInfo }) => {
  console.log(loginBtnInfo);

  return (
    <div className="flex flex-col gap-4">
      {loginBtnInfo.map((btn, index) => (
        <button
          key={index}
          className="w-full flex items-center gap-2 justify-center text-xl font-medium px-4 py-3 rounded-full cursor-pointer border border-neutral-300 hover:bg-neutral-200/70"
        >
          <span>{btn.icon}</span>
          <p className="text-neutral-500">{btn.label}</p>
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;
