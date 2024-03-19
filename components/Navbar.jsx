"use client";

import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  // get location
  // const getLocationHandler = async () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log(position);
  //     },
  //     () => {
  //       console.log("error");
  //     },
  //   );
  // };

  return (
    <div>
      Navbar
      {/* <Button onClick={getLocationHandler}>Get Location</Button> */}
    </div>
  );
};

export default Navbar;
