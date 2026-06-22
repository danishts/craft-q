import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

function AssignVendorCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center gap-[8px] px-[12px] h-[33px] bg-[#3A2414] rounded-[23px] whitespace-nowrap"
      >
        <span className="text-white font-medium text-[13px] leading-[8.19px]">
          Assign Vendor
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-[497px] rounded-[12px] border border-[#D1D5DB] bg-white p-[20px] shadow-lg">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="w-full">
                <p className="text-[20px] font-semibold leading-[32px] tracking-tight text-[#3F4254]">
                  Assign Vendor to Order
                </p>

                <div className="w-full h-[1px] bg-[#A1A5B766] mt-2" />
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F5F4F8] text-[#3F4254]"
              >
                <IoCloseOutline size={18} />
              </button>
            </div>

            <div className="flex flex-col w-full gap-[28px] mb-4">
              <div className="flex flex-col w-full gap-[10px]">
                <p className="text-[16px] font-semibold text-[#020617]">
                  Assign Vendor
                </p>
                <div className="flex items-center justify-between h-[57px] w-full rounded-[62px] bg-[#F5F4F8] px-[22px] py-[20px]">
                  <span className="text-[14px] font-medium text-[#7C7C7C]">
                    Not Assigned
                  </span>
                  <div className="flex items-center justify-center w-[18px] h-[18px]">
                    <FiChevronDown size={18} className="text-[#7C7C7C]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[16px]">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full sm:w-[220.5px] h-[50px] rounded-3xl bg-[#DCDCDC] font-inter font-semibold text-[16px] leading-[22px] text-[#020617]"
              >
                Cancel
              </button>
              <button
                type="button"
                className="w-full sm:w-[220.5px] h-[50px] rounded-3xl bg-[#3A2414] font-inter font-semibold text-[16px] leading-[22px] text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AssignVendorCard;
