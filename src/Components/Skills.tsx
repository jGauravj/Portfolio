import React from "react";

const Skills = () => {
  return (
    <div className="w-full p-5 skill text-white border-2 border-dashed border-[rgba(255,255,255,0.4)] rounded-[20px] mt-[30px]">
      <h1 className="text-2xl font-medium">Forontend :-</h1>
      <div className="flex  flex-wrap gap-x-4 gap-y-3 text-sm font-medium mt-[10px]">
        <p className="px-3 py-1 bg-[#2ECC71] rounded-[6px]">HTML</p>
        <p className="px-3 py-1 bg-[#3498DB] rounded-[6px]">CSS</p>
        <p className="px-3 py-1 bg-[#F1C40F] rounded-[6px]">JavaScript</p>
        <p className="px-3 py-1 bg-[#9B59B6] rounded-[6px]">TypeScript</p>
        <p className="px-3 py-1 bg-[#E74C3C] rounded-[6px]">React Js</p>
        <p className="px-3 py-1 bg-[#1ABC9C] rounded-[6px]">Next Js</p>
        <p className="px-3 py-1 bg-[#34495E] rounded-[6px]">Tailwind Css</p>
        <p className="px-3 py-1 bg-[#E67E22] rounded-[6px]">Bootstrap 5</p>
        <p className="px-3 py-1 bg-[#95A5A6] rounded-[6px]">ShadCN UI</p>
        <p className="px-3 py-1 bg-[#16A085] rounded-[6px]">GSAP</p>
        <p className="px-3 py-1 bg-[#D35400] rounded-[6px]">Git</p>
        <p className="px-3 py-1 bg-[#6600cc] rounded-[6px]">Figma</p>
      </div>
      <h1 className="text-2xl font-medium mt-[20px]">Backend :-</h1>
      <div className="flex  flex-wrap gap-x-4 gap-y-3 text-sm font-medium mt-[10px]">
        <p className="px-3 py-1 bg-[#E67E22] rounded-[6px]">Learning ...</p>
      </div>
    </div>
  );
};

export default Skills;
