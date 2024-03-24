import React from "react";
import { Button } from "./ui/button";
import Work from "./Work";

const WorkList = () => {
  return (
    <section className="body-font overflow-hidden bg-black text-white ">
      <div className="container mx-auto px-5 py-14">
        <div className="-my-8 divide-y-2 divide-hoverCol">
          <Work />
          <Work />
          <Work />
        </div>
      </div>
      <div className="flex w-full justify-center pb-6">
        <Button variant="primary" size="primary">
          View All
        </Button>
      </div>
    </section>
  );
};

export default WorkList;
