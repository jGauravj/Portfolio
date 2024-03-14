import React from "react";

const Experience = () => {
  return (
    <div className="text-white mt-[30px]">
      <h1 className="text-2xl font-medium">Experience :-</h1>
      <div className="border-2 backdrop-blur-xl border-dashed mt-5 border-[rgba(255,255,255,0.4)] rounded-[20px] p-5">
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">InfoObjects</h2>
          <p className="text-sm text-gray-300">[Jan 2023 - Nov 2023]</p>
        </div>
        <p className="text-sm text-gray-300">
          Frontend developer & UX/UI Designer
        </p>
        <p className="text-[16px] mt-5 hightlight">
          “Joined InfoObjects through college placement in Jan 2023, contributed
          to design and development teams, and worked on projects including
          Trumio and Pidilite PoC.”
        </p>
        <div className="border-2 backdrop-blur-xl mt-5 border-dashed border-[rgba(255,255,255,0.4)] rounded-[20px] p-5">
          <h3 className="text-xl font-medium">Trumio</h3>
          <div className="flex text-sm gap-x-3 mt-[5px]">
            <p className="px-3 py-1 bg-[#2ECC71] rounded-[6px]">HTML</p>
            <p className="px-3 py-1 bg-[#3498DB] rounded-[6px]">CSS</p>
            <p className="px-3 py-1 bg-[#E67E22] rounded-[6px]">Bootstrap 5</p>
            <p className="px-3 py-1 bg-[#F1C40F] rounded-[6px]">JavaScript</p>
          </div>
          <p className="mt-5 text-sm">
            “Contributed to the Trumio project, a LinkedIn-style platform
            connecting job seekers and companies, by collaborating with the{" "}
            <span className="text-[#7FFF00]">frontend team.</span> Specialized
            in crafting distinctive front-end pages and enhancing CSS for
            optimal responsiveness.’’
          </p>
        </div>
        <div className="border-2 backdrop-blur-xl mt-5 border-dashed border-[rgba(255,255,255,0.4)] rounded-[20px] p-5">
          <h3 className="text-xl font-medium">Pidilite PoC</h3>
          <div className="flex text-sm gap-x-3 mt-[5px]">
            <p className="px-3 py-1 bg-[#2ECC71] rounded-[6px]">HTML</p>
            <p className="px-3 py-1 bg-[#3498DB] rounded-[6px]">CSS</p>
            <p className="px-3 py-1 bg-[#E67E22] rounded-[6px]">Bootstrap 5</p>
            <p className="px-3 py-1 bg-[#6600cc] rounded-[6px]">Figma</p>
          </div>
          <p className="mt-5 text-sm">
            “Contributed to the PoC project, a PoC from Pidilite , by
            collaborating with the{" "}
            <span className="text-[#7FFF00]"> designing team</span> ’’
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
