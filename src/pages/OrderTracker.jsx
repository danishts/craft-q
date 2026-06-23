import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsChatSquareDotsFill } from "react-icons/bs";
import PageHeader from "../components/PageHeader";

const trackerData = [
  {
    customer: "Velvet Fabric",
    projectCategory: "Reupholstery",
    quoteId: "COM-001",
    currentProgress: "On Route",
    status: "On Route",
    client: "Velvet Fabric",
    itemType: "Reupholstery",
    priority: "High",
    date: "06/12/2025",
    email: "velvet.fabric@example.com",
    phone: "+1 555 998 7766",
    address: "234 Textile Avenue, New York",
    fabricName: "Velvet Fabric",
    materialType: "COM/Process",
    shipmentId: "12345678901",
    furnitureType: "Sofa",
  },
];

function OrderTracker() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate("/order-track", { state: item });
  };

  const filteredTrackerData = trackerData.filter((item) => {
    if (!searchTerm) return true;
    const query = searchTerm.toLowerCase();
    return (
      item.customer.toLowerCase().includes(query) ||
      item.projectCategory.toLowerCase().includes(query) ||
      item.quoteId.toLowerCase().includes(query) ||
      item.currentProgress.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <PageHeader
        title="Order Tracker Manager"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="mt-4 w-full overflow-x-auto">
        <div className="max-h-[550px] overflow-y-auto border border-[#F1F1F2] rounded-2xl bg-white">
          <table className="min-w-[900px] w-full">
            <thead className="sticky top-0 z-10 bg-white">
              <tr>
                <th colSpan={6} className="px-6 pt-7.5 pb-5 text-left bg-white">
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[#3F4254] font-semibold text-[18px] leading-4.5">
                      Textile Management
                    </p>
                  </div>
                </th>
              </tr>
              <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] border-b border-[#F1F1F2]">
                <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                  Customer Name
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                  Project Category
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                  Quote Identifier
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                  Current Progress
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredTrackerData.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(item)}
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                    <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                      {item.customer}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                    <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                      {item.projectCategory}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                    <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                      {item.quoteId}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-sm bg-[#FCEFDE] text-[#FF8800] font-poppins font-semibold text-[12px]">
                      {item.currentProgress}
                    </span>
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2]">
                    <div className="flex items-center justify-center">
                      <BsChatSquareDotsFill className="text-[18px] text-[#A1A5B7]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderTracker;
