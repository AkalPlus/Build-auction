import React from "react";
import Link from "next/link";

const Work = () => {
  return (
    <div className="flex flex-wrap py-8 md:flex-nowrap">
      <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
        <span className="title-font font-semibold text-white">CATEGORY</span>
        <span className="mt-1 text-sm text-hoverCol">12 Jun 2019</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="title-font mb-2 text-2xl font-medium text-white">
          Bitters hashtag waistcoat fashion axe chia unicorn
        </h2>
        <p className="leading-relaxed text-hoverCol">
          Glossier echo park pug, church-key sartorial biodiesel vexillologist
          pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag
          selfies, poke vaporware kombucha lumbersexual pork belly polaroid
          hoodie portland craft beer.
        </p>
        <Link
          href={"/"}
          className="mt-4 inline-flex items-center font-bold text-white hover:text-hoverCol"
        >
          View Details
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Work;
