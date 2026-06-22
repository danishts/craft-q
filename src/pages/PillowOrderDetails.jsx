import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./OrderDetails/components/Header";
import CustomerInfo from "./OrderDetails/components/CustomerInfo";

function PillowOrderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState(state?.status || "Pending");
  const [open, setOpen] = useState(false);
  const activeTab = "furniture";
  const options = ["Pending", "On Route", "Delivered", "Cancelled"];

  return (
    <div className="space-y-6">
      <Header
        navigate={navigate}
        activeTab={activeTab}
        status={status}
        setStatus={setStatus}
        open={open}
        setOpen={setOpen}
        options={options}
      />

      <CustomerInfo state={state} activeTab={activeTab} />

      <div className="mt-6 max-w-[870px] w-full bg-white p-[30px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.38px]">
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Customer
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {state?.client || state?.customer || "Emily R."}
            </p>
          </div>
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Pillow
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {state?.itemType || state?.pillow || "Memory Foam Pillow"}
            </p>
          </div>
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Status
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {status}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[14.38px] mt-[23.38px]">
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Fabric Type
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {state?.fabric || "Cotton Blend"}
            </p>
          </div>
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Order Date
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {state?.date || "06/15/2025"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PillowOrderDetails;
