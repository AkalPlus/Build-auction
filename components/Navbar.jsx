"use client";
import { Button } from "./ui/button";

const Navbar = () => {
  // get location
  const getLocationHandler = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      () => {
        console.log("error");
      },
    );
  };

  return (
    <nav className="bg-black p-7 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg font-semibold">AkalPlus</span>
        </div>
        <form className="mx-auto max-w-xl">
          <label
            htmlFor="default-search"
            className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
              <svg
                className="h-4 w-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </form>
        <Button
          onClick={getLocationHandler}
          className="bg-blue-700 hover:bg-blue-800"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
