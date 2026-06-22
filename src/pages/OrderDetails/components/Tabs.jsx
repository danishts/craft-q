import React from "react";
function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="mt-6 flex items-center gap-6 border-b border-[#E2E8F0]">
      <button
        onClick={() => setActiveTab("furniture")}
        className={`pb-2 text-[14px] font-semibold ${
          activeTab === "furniture"
            ? "text-[#3A2414] border-b-2 border-[#3A2414]"
            : "text-[#A1A5B7]"
        }`}
      >
        Furniture
      </button>

      <button
        onClick={() => setActiveTab("track")}
        className={`pb-2 text-[14px] font-semibold ${
          activeTab === "track"
            ? "text-[#3A2414] border-b-2 border-[#3A2414]"
            : "text-[#A1A5B7]"
        }`}
      >
        Orders Track
      </button>
    </div>
  );
}

export default Tabs;
