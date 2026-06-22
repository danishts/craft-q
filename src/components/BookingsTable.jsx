import React from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";

function BookingsTable({ data, onRowClick }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="max-h-[450px] overflow-y-auto border border-[#F1F1F2] rounded-2xl bg-white">
        <table className="min-w-[700px] w-full">
          <thead className="sticky top-0 z-10 bg-white">
            <tr>
              <th colSpan={4} className="px-6 pt-7.5 pb-5 text-left bg-white">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[#3F4254] font-semibold text-[18px] leading-4.5">
                    All Client Consultations & Pickups
                  </p>
                </div>
              </th>
            </tr>
            <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] border-b border-[#F1F1F2]">
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Customer Name
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Booking Type
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Date / Time
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() => onRowClick(item)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 sm:px-6 py-4 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.customer}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-4 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.bookingType}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-4 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.datetime}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-4 sm:py-5 border-b border-dashed border-[#F1F1F2]">
                  <div className="flex items-center justify-center gap-2">
                    <BsChatSquareDotsFill className="text-[18px] text-[#A1A5B7] cursor-pointer hover:text-[#FF8800] transition-colors" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingsTable;
