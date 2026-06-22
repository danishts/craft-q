import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Header from "./OrderDetails/components/Header";
import CustomerInfo from "./OrderDetails/components/CustomerInfo";
import yesImg from "../assets/yes.png";

function OrdersTrack() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [status, setStatus] = useState(state?.currentProgress || state?.status || "On Route");
  const [open, setOpen] = useState(false);
  const activeTab = "furniture";
  const options = ["Pending", "On Route", "Delivered", "Cancelled"];

  const details = {
    client: state?.customer || state?.client || "Velvet Fabric",
    email: state?.email || "velvet.fabric@example.com",
    phone: state?.phone || "+1 555 998 7766",
    address: state?.address || "234 Textile Avenue, New York",
  };

  const progressPercent = 60;

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
        title="Order Tracker Details"
        showAssignVendor={false}
      />

      <CustomerInfo state={details} activeTab={activeTab} />

      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1114px] flex flex-col gap-[52.62px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between w-full h-[62.87px]">
              <div>
                <h3 className="font-poppins font-medium text-[25.98px] text-[#151515]">
                  Order Dispatched
                </h3>
                <p className="text-[15.59px] text-[#151515] opacity-40 mt-1">
                  Quote ID {state?.quoteId || state?.quoteIdentifier || "COM-001"}
                </p>
              </div>

              <div className="flex items-start">
                <img
                  src={yesImg}
                  alt="parcel"
                  className="w-[62.27px] h-[62.27px] rounded-[11.32px] object-cover -mt-[25.63px]"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-[17.99px]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-between w-full gap-3">
                  {[
                    { d: "12 Apr", sub: "12 Apr, 20" },
                    { d: "13 Apr", sub: "13 Apr, 20" },
                    { d: "14 Apr", sub: "14 Apr, 20" },
                    { d: "15 Apr", sub: "15 Apr, 20" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex flex-col justify-between w-1/4">
                      <div className="text-[15.66px] font-dm font-medium text-[#151515]">
                        {item.sub}
                      </div>
                      <div className="text-[12.18px] text-[#151515] opacity-70">
                        {item.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative w-full">
                <div className="h-2 bg-[#D9D9D9] rounded-full w-full" />
                <div
                  className="absolute top-[-4px] left-0 h-2 bg-[#3A2414] rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />

                <div className="absolute inset-x-0 top-0 transform -translate-y-1/2 flex justify-between items-center">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div
                        className={`w-[19.3px] h-[19.3px] rounded-full mt-14 border-2 ${
                          i <= Math.floor((progressPercent / 100) * 3)
                            ? "bg-[#3A2414] border-[#3A2414]"
                            : "bg-white border-[#D9D9D9]"
                        }`}
                      />
                      <div className="text-[15.66px] font-dm font-semibold mt-2 text-[#151515]">
                        {i === 0 ? "Pick up" : "Dispatched"}
                      </div>
                      <div className="text-[12.18px] text-[#151515] opacity-70">
                        Islamabad, PK
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrdersTrack;
