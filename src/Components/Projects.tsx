import React from "react";
import Image from "next/image";
import foodzzz from "../../public/foodzzz.png";
import animated from "../../public/animated.png";

const Projects = () => {
  return (
    <div className="text-white mt-[30px]">
      <h1 className="text-2xl font-medium">Projects :-</h1>
      <div className="border-2 backdrop-blur-xl border-dashed mt-5 border-[rgba(255,255,255,0.4)]   rounded-[20px] p-5">
        <div className="flex gap-x-10 items-center">
          <Image
            src={foodzzz}
            alt="foodzzz-img"
            className="w-[380px] rounded-[20px]"
          />
          <div>
            <h3 className="text-xl font-medium">Foodzzz</h3>
            <div className="flex text-sm mt-[5px] gap-x-3">
              <p className="px-3 py-1 bg-[#2ECC71] rounded-[6px]">HTML</p>
              <p className="px-3 py-1 bg-[#3498DB] rounded-[6px]">CSS</p>
              <p className="px-3 py-1 bg-[#E74C3C] rounded-[6px]">React Js</p>
              <p className="px-3 py-1 bg-[#34495E] rounded-[6px]">
                Tailwind Css
              </p>
            </div>
            <p className="text-sm mt-5">Swiggy’s Live API integration</p>
            <p className="text-sm">
              Lazzy loading, Shimmer UI, Custom Hooks . . .
            </p>
            <a href="https://github.com/jGauravj/Foodzzz" target="_blank">
              <button className="backdrop-blur-xl font-medium border-2 border-dashed text-sm py-2 mt-5 px-28 border-[rgba(255,255,255,0.4)] rounded-[12px]">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="border-2 backdrop-blur-xl border-dashed mt-5 border-[rgba(255,255,255,0.4)]   rounded-[20px] p-5">
        <div className="flex gap-x-10 items-center">
          <Image
            src={animated}
            alt="animated-img"
            className="w-[380px] rounded-[20px]"
          />
          <div>
            <h3 className="text-xl font-medium">Animated Web</h3>
            <div className="flex text-sm mt-[5px] gap-x-3">
              <p className="px-3 py-1 bg-[#2ECC71] rounded-[6px]">HTML</p>
              <p className="px-3 py-1 bg-[#3498DB] rounded-[6px]">CSS</p>
              <p className="px-3 py-1 bg-[#F1C40F] rounded-[6px]">JavaScript</p>
              <p className="px-3 py-1 bg-[#16A085] rounded-[6px]">GSAP</p>
            </div>
            <p className="text-sm mt-5">Full Animated website UI</p>
            <p className="text-sm">Modern Website, High quality animations</p>
            <a href="https://github.com/jGauravj/jranimated.github.io" target="_blank">
              <button className="backdrop-blur-xl font-medium border-2 border-dashed text-sm py-2 mt-5 px-28 border-[rgba(255,255,255,0.4)] rounded-[12px]">
                Github
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
