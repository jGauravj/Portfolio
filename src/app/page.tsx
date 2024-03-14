import React from "react";
import image from "../../public/roombg.png";
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import Skills from "@/Components/Skills";
import Resume from "@/Components/Resume";

const page = () => {
  return (
    <div className="w-screen h-screen">
      <Image src={image} alt="" layout="fill" className=" blur-md -z-10" />

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className=" w-3/4 overflow-y-scroll h-3/4 main rounded-[20px] border-2 border-[rgba(255,255,255,0.2)] p-[30px]">
          <h1 className="text-white text-6xl font-semibold">
            Hi, this is Gaurav
          </h1>
          <p className="text-white text-2xl w-[60%] font-medium mt-5">
            Transforming Visions into Interactive Reality as a{" "}
            <span className="text-[#7FFF00]">Frontend Developer.</span>
          </p>
          <Skills />
          <Resume />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default page;
