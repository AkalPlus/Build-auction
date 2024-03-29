"use client";

import clsx from "clsx";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { hamIcon } from "@/public/Icon";
import Image from "next/image";
import axios from "axios";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
function Header(props) {
  const [scrollStatus, setScrollStatus] = useState(false);
  const [scrollStarted, setScrollStarted] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 650) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
    if (window.scrollY > 10) {
      setScrollStarted(true);
    } else {
      setScrollStarted(false);
    }
  };

  useEffect(() => {
    if (window.scrollY > 650) {
      setScrollStatus(true);
    }

    window.addEventListener("scroll", handleScroll);

    //cleanup function when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Geolocation Functionality
  const [userLocation, setUserLocation] = useState(null);
  // useEffect(() => {
  //   // Get user's current location
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setUserLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     });
  //   }
  // }, []);

  const [locationName, setLocationName] = useState(null);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);
  useEffect(() => {
    const fetchLocationName = async () => {
      // Reverse geocode to get location name
      if (userLocation) {
        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${userLocation.latitude}&lon=${userLocation.longitude}&zoom=18&addressdetails=1`,
          );
          const data = response.data;
          console.log("data = ", data.display_name);
          if (data && data.address) {
            setLocationName(data.display_name);
          }
        } catch (error) {
          console.error("Error fetching location:", error);
        }
      }
    };

    fetchLocationName();
  }, [userLocation]);

  return (
    <header
      className={clsx(
        "fixed top-0 z-[1000] w-full select-none bg-transparent transition-transform ease-in-out",
        {
          "pointer-events-none translate-y-[-100%]": scrollStatus,
          "text-textPrimary border-b-0 backdrop-blur-md": scrollStarted,
          [props?.className]: true,
        },
      )}
    >
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center px-4 lg:h-20 lg:px-10">
        <Link
          href="/"
          className="ml-2 mr-auto transition-all duration-500 ease-in-out lg:hover:scale-110"
        >
          <Logo />
        </Link>
        <NavigationMenu className="hidden flex-1 self-center md:block">
          <NavigationMenuList className="gap-9">
            {/* Your existing navigation items */}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Display user's current location */}
        {userLocation && (
          <div className="flex items-center">
            <div className="box mr-2">
              <input
                type="text"
                value={locationName}
                placeholder="Enter Location"
                onChange={(e) => setLocationName(e.target.value)}
                className="input-field"
              />
              <style jsx>{`
                .box {
                  border: 1px solid #ccc;
                  background-color: #f9f9f9;
                  border-radius: 3px;
                  width: 250px;
                  margin: 0 auto;
                }
                .input-field {
                  width: calc(100% - 2px);
                  border: none;
                  padding: 5px 10px;
                  border-radius: 3px;
                }
              `}</style>
            </div>
            {/* "Get Started" button with margin */}
            <Link href="/contact#contact-form" className="hidden md:block">
              <Button className="bg-primaryForeground text-textDark hover:border-primaryForeground hover:text-textPrimary ml-2 text-base font-semibold hover:border hover:bg-transparent md:block">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
