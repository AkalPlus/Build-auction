// @ts-nocheck
"use client"
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useClient } from 'next/client'; // Import useClient hook

// Add the useClient directive
// @ts-ignore
export const __useClient = useClient;

const Navbar = () => {
  const client = useClient();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const successHandler = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      getAddress(position.coords.latitude, position.coords.longitude);
    };

    const errorHandler = (error) => {
      setError(`Error getting geolocation: ${error.message}`);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const getAddress = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=YOUR_API_KEY`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setAddress(data.results[0].formatted_address);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      setAddress('Error fetching address');
    }
  };

  const handleInputClick = () => {
    if (latitude && longitude) {
      getAddress(latitude, longitude);
    }
  };

  return (
    <nav className="bg-gray-900 p-7 text-white">
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
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-black p-4 pl-10 pr-16 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 md:w-96"
              placeholder="Search Mockups, Logos..."
              onClick={handleInputClick}
              value={address}
              readOnly
            />

            <button
              type="submit"
              className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <Button className="bg-blue-700 hover:bg-blue-800">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
