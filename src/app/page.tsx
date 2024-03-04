import Navbar from "@/Components/Navbar";
import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const page = () => {
  return (
    <div className="h-screen w-screen bg-[#fafafa] dark:bg-[#1e1e1e] ">
      <div className="">
        <Navbar />
      </div>
      <section className="">
        <div className="lg:mx-[120px] pt-[90px] ">
          <h1 className="text-[288px] drop-shadow-md text-[#1e1e1e] dark:text-[#fafafa]  font-semibold ">
            GAURAV
          </h1>
          <p className="text-[#1e1e1e] dark:text-[#fafafa] leading-tight text-[44px] font-medium w-2/3">
            Transforming Visions into Interactive Reality as a{" "}
            <span className="text-[#7FFF00]">Frontend Developer.</span>
          </p>
    
          <div className="flex justify-between ">
            <button className=" w-1/3 py-1 tracking-widest text-[#1e1e1e] font-semibold text-sm mt-7  rounded-md bg-[#7FFF00] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_2px_2px_rgba(   )]">
              <a href="https://drive.google.com/uc?export=download&id=1cMkJnMeF4_Ej2ehAmtJ_uVdrzuQLwDHs">
                RESUME
              </a>
            </button>
            <div>
              <a href="https://github.com/jGauravj" target="_blank">
                <IoLogoGithub className="text-[#1e1e1e] cursor-pointer dark:text-[#fafafa] text-2xl absolute mb-4 hover:scale-110" />
              </a>
              <a
                href="https://www.linkedin.com/company/wejammin-ai/jobs/"
                target="_blank"
              >
                <FaLinkedinIn className="text-[#1e1e1e] cursor-pointer dark:text-[#fafafa] text-2xl absolute mt-11 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

// href="https://drive.google.com/uc?export=download&id=1cMkJnMeF4_Ej2ehAmtJ_uVdrzuQLwDHs"
