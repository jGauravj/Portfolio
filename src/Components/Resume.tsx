import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="flex gap-x-[60px] mt-[30px] ">
      <div className="flex backdrop-blur-xl  border-2 border-dashed border-[rgba(255,255,255,0.4)] rounded-[20px] items-center py-2 px-7 gap-x-3 text-white">
        <a href="https://github.com/jGauravj" target="_blank">
          <IoLogoGithub className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/gaurav-jangir-4b2427221/"
          target="_blank"
        >
          <FaLinkedinIn className="text-3xl" />
        </a>
      </div>
      <button className="backdrop-blur-xl border-2 font-medium text-white px-40 border-dashed border-[rgba(255,255,255,0.4)] rounded-[20px]">
        <a href="https://drive.google.com/uc?export=download&id=1cMkJnMeF4_Ej2ehAmtJ_uVdrzuQLwDHs">
          Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
