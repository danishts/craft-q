import React from "react";
import fImg from "../../../assets/f.png";

function FurnitureTab({ state }) {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-6">
      <img
        src={fImg}
        alt="furniture"
        className="w-full sm:w-[245.97px] h-auto sm:h-[254.49px] rounded-[19px] object-cover"
      />   

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[23.38px] w-full lg:w-[441.23px]">
        <div>
          <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
            Client
          </p>
          <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
            {state?.client}
          </p>
        </div>

        <div>
          <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
            Item
          </p>
          <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
            {state?.itemType}
          </p>
        </div>

        <div>
          <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
            Status
          </p>
          <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
            {state?.status}
          </p>
        </div>

        <div>
          <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
            Priority
          </p>
          <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
            {state?.priority}
          </p>
        </div>

        <div>
          <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
            Date
          </p>
          <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
            {state?.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FurnitureTab;
