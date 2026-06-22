import React from "react";
import { IoArrowBack } from "react-icons/io5";
import StatusDropdown from "./StatusDropdown";
import AssignVendorCard from "./AssignVendorCard";

function Header({
  navigate,
  activeTab,
  status,
  setStatus,
  open,
  setOpen,
  options,
  title,
  showAssignVendor = true,
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-[#020617]">
          <IoArrowBack size={20} />
        </button>

        <h1 className="font-semibold text-[18px] text-[#020617]">
          {title || (activeTab === "furniture" ? "Order Details" : "Seller Details")}
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {showAssignVendor && activeTab === "furniture" && <AssignVendorCard />}

        <StatusDropdown
          status={status}
          setStatus={setStatus}
          open={open}
          setOpen={setOpen}
          options={options}
        />
      </div>
    </div>
  );
}

export default Header;
