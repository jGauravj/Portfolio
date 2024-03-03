"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdSunny } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";

type MenuItem = "Experience" | "Skills" | "Projects" | "About" | null;

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<MenuItem>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute w-full">
      <div className="flex justify-between lg:mx-[120px] py-2 mt-6 px-5 rounded-md border border-gray-400 dark:border-pink-300 backdrop-blur-md">
        <div>
          <h1 className="text-base font-semibold dark:text-[#fafafa] cursor-pointer ">
            Jr.Gaurav
          </h1>
        </div>
        <div className="flex gap-28">
          <div>
            <p className="font-medium text-[#7FFF00]">open to work</p>
          </div>
          <ul className="flex gap-1 font-medium cursor-pointer">
            <li
              className={`nav-item ${
                hoveredItem === null
                  ? "text-[#fafafa]"
                  : hoveredItem === "Experience"
                  ? "text-[#fafafa]"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => setHoveredItem("Experience")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Experience,
            </li>
            <li
              className={`nav-item ${
                hoveredItem === null
                  ? "text-[#fafafa]"
                  : hoveredItem === "Skills"
                  ? "text-[#fafafa]"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => setHoveredItem("Skills")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Skills,
            </li>
            <li
              className={`nav-item ${
                hoveredItem === null
                  ? "text-[#fafafa]"
                  : hoveredItem === "Projects"
                  ? "text-[#fafafa]"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => setHoveredItem("Projects")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Projects,
            </li>
            <li
              className={`nav-item ${
                hoveredItem === null
                  ? "text-[#fafafa]"
                  : hoveredItem === "About"
                  ? "text-[#fafafa]"
                  : "text-gray-400"
              }`}
              onMouseEnter={() => setHoveredItem("About")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              About
            </li>
          </ul>
          <div className="flex">
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? <MdSunny /> : <MdOutlineWbSunny />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
