import React from "react";

function DashboardStatCard({ icon, value, label }) {
  return (
    <div className="w-full sm:w-[364px] border border-[#F1F1F2] rounded-[12px] p-[30px_16px] flex flex-col gap-[1px] bg-white">
      {/* TOP SECTION */}
      <div className="flex items-center gap-[10px]">
       

        <h1 className="font-inter font-semibold text-[38px] leading-[38px] tracking-[-2%] text-[#3F4254]">
          {value}
        </h1>
      </div>

      {/* LABEL */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[14px] font-semibold text-[#A1A5B7]">{label}</p>
      </div>
    </div>
  );
}

export default DashboardStatCard;
