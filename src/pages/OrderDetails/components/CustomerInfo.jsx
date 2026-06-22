import React from "react";
import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";

function CustomerInfo({ state, activeTab }) {
  const customerName = state?.client || state?.customer || "Max Kent";
  const email = state?.email || state?.contactEmail || "max@kt.com";
  const phone = state?.phone || state?.contactPhone || "+92316-456262";
  const address = state?.address || state?.location || "6659 Joe Cape, Mexico";

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-6 w-full">
      <div className="flex items-center gap-6">
        <img
          src="https://i.pravatar.cc/150"
          alt="customer"
          className="w-[70px] h-[70px] rounded-[105.71px] object-cover"
        />

        <div className="flex flex-col gap-[8px]">
          <h2 className="font-inter font-semibold text-[24px] leading-[100%] text-[#151515]">
            {customerName}
          </h2>

          <div className="flex items-center gap-[8px] flex-wrap">
            <div className="flex items-center gap-[5px] h-[22px]">
              <MdOutlineEmail size={18} className="text-[#3A2414]" />
              <span className="text-[15px] font-semibold text-[#A1A5B7]">
                {email}
              </span>
            </div>

            <div className="flex items-center gap-[5px] h-[22px]">
              <MdOutlinePhone size={18} className="text-[#3A2414]" />
              <span className="text-[15px] font-semibold text-[#A1A5B7]">
                {phone}
              </span>
            </div>

            <div className="flex items-center gap-[5px] h-[22px]">
              <MdOutlineLocationOn size={18} className="text-[#3A2414]" />
              <span className="text-[15px] font-semibold text-[#A1A5B7]">
                {address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerInfo;
