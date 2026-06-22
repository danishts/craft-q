import React from "react";
import yesImg from "../../../../src/assets/yes.png";

function OrdersTrack() {
  // progressPercent can be driven by props/state; set to 60 for demo
  const progressPercent = 60;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-[1114px] flex flex-col gap-[52.62px]">
        {/* Top timeline + header */}
        <div className="flex flex-col gap-4">
          {/* Step 1: header row */}
          <div className="flex items-center justify-between w-full h-[62.87px]">
            <div>
              <h3 className="font-poppins font-medium text-[25.98px] text-[#151515]">
                Order Dispatched
              </h3>
              <p className="text-[15.59px] text-[#151515] opacity-40 mt-1">
                Order ID #ADI-1254512
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

          {/* Step 2: delivery timeline */}
          <div className="flex flex-col w-full gap-[17.99px]">
            <div className="flex items-center justify-between w-full">
              {/* Dates row top */}
              <div className="flex items-center justify-between w-full">
                {[
                  { d: "12 Apr", sub: "12 Apr, 20" },
                  { d: "13 Apr", sub: "13 Apr, 20" },
                  { d: "14 Apr", sub: "14 Apr, 20" },
                  { d: "15 Apr", sub: "15 Apr, 20" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-between w-1/4"
                  >
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

            {/* Progress bar with dots */}
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
                      className={`w-[19.3px] h-[19.3px] rounded-full mt-14 border-2 ${i <= Math.floor((progressPercent / 100) * 3) ? "bg-[#3A2414] border-[#3A2414]" : "bg-white border-[#D9D9D9]"}`}
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

        {/* Card area (ship to + item) */}
        <div className="w-full">
          <div className="w-full rounded-[19.65px] border border-[#F1F1F2] p-[15.72px] mt-[25.63px]">
            <div className="flex items-start justify-between w-full mb-4">
              <div className="flex items-center gap-3 text-[#151515] opacity-70 text-[10.81px]">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                    stroke="#151515"
                    strokeWidth="1"
                  />
                </svg>
                <span className="text-[11.79px]">
                  House Number 2345, 516 Chandler Groves, New Mexico
                </span>
              </div>
            </div>

            <div className="flex items-start  gap-4">
              <img
                src={yesImg}
                alt="item"
                className="w-[62.27px] h-[62.27px] rounded-[11.32px] object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="flex items-start justify-between w-full">
                  <div>
                    <p className="text-[16.3px] font-dm font-medium text-[#151515]">
                      Sofa Reupholstery
                    </p>
                    <p className="text-[11.29px] font-dm font-medium text-[#151515]">
                      Order ID{" "}
                      <span className="opacity-80 text-[8.78px]">#12345</span>
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11.25px] font-dm font-medium opacity-70">
                      Quote Total
                    </p>
                    <p className="text-[18.32px] font-dm font-medium">$1,250</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-3">
                    <div className="text-[11.29px] font-dm font-medium">
                      Priority
                    </div>
                    <div className="flex items-center gap-2 bg-[#E6FFED] px-2 py-1 rounded text-[7.5px] text-[#007408]">
                      Yes
                    </div>
                  </div>
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
