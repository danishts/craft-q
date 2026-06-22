import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./OrderDetails/components/Header";
import CustomerInfo from "./OrderDetails/components/CustomerInfo";

function BookingDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [status, setStatus] = useState(state?.status || "Pending");
  const [open, setOpen] = useState(false);
  const activeTab = "furniture";
  const options = ["Pending", "On Route", "Delivered", "Cancelled"];

  const details = {
    customer: state?.customer || state?.bookingName || state?.customerName || "Emily R.",
    bookingType: state?.bookingType || state?.type || "Consultation",
    datetime: state?.datetime || state?.date || "05/05 - 05:45 PM",
  };

  return (
    <div className="space-y-6 pb-10">
      <Header
        navigate={navigate}
        activeTab={activeTab}
        status={status}
        setStatus={setStatus}
        open={open}
        setOpen={setOpen}
        options={options}
        title="Booking Details"
        showAssignVendor={false}
      />
      <CustomerInfo state={state} activeTab={activeTab} />
      <div className="mt-6 max-w-[870px] w-full bg-white p-[30px] ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.38px]">
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Customer
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.customer}
            </p>
          </div>
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Booking Type
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.bookingType}
            </p>
          </div>
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Date / Time
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.datetime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingDetails;
