import React from "react";
import { logo } from "@/public/Image/index.js";

function Logo() {
  console.log(logo);
  return (
    <div className="w-10 lg:w-16">
      {/* <span
        className={
          "font-robot text-3xl font-semibold text-primaryForeground lg:text-4xl"
        }
      >
        AkalPlus
      </span> */}
      <img className="w-full" src={logo.src} alt="AkalPs" />
    </div>
  );
}

export default Logo;
