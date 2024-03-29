import React from "react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="bg-black/90 text-white">
      <div className="p-8 md:p-12 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold  md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-hoverCol  sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
            officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
            consequuntur exercitationem incidunt tempora nisi?
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form
            action="#"
            className="flex  flex-col items-center justify-center sm:flex sm:flex-row sm:gap-4"
          >
            <div className="w-full sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md bg-white p-3 text-black shadow-sm transition focus:bg-hoverCol focus:outline-none  "
              />
            </div>

            <Button variant="primary" size="primary" className="mt-4 sm:mt-0">
              Get Started
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
