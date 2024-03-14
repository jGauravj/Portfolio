import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-center items-center z-20">
      <div className="w-1/2 h-[60px] main flex items-center border-2 border-[rgba(255,255,255,0.2)] rounded-[20px] -mt-[30px] z-20">
        <div className="flex justify-evenly w-full text-white items-center">
          <h1 className=" text-[15px] font-semibold cursor-pointer">
            Jr.Gaurav
          </h1>
          <p className=" text-[12px] hover:border border-dashed  p-2 rounded-[10px] cursor-pointer">
            Experience
          </p>
          <p className=" text-[12px] hover:border border-dashed  p-2 rounded-[10px] cursor-pointer">
            Projects
          </p>
          <p className=" text-[12px] hover:border border-dashed  p-2 rounded-[10px] cursor-pointer">
            About
          </p>
          <p className=" text-[12px] hover:border border-dashed p-2 rounded-[10px] cursor-pointer">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
