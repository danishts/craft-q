import React from "react";

function PageLayout({ title }) {
  return (
    <div className="w-full">
      <h1 className="font-[Poppins] font-semibold text-[18px] text-[#3F4254] leading-4.5 tracking-[-0.01em]">
        {title}
      </h1>
    </div>
  );
}

export default PageLayout;
