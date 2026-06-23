import React from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";

function FabricTable({ data, searchTerm = "", onRowClick }) {
  const filteredData = data.filter((item) => {
    if (!searchTerm) return true;
    const query = searchTerm.toLowerCase();
    return (
      item.fabricName.toLowerCase().includes(query) ||
      item.materialType.toLowerCase().includes(query) ||
      item.currentStatus.toLowerCase().includes(query) ||
      item.shipmentId.toLowerCase().includes(query) ||
      item.furnitureType.toLowerCase().includes(query)
    );
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="max-h-[550px] overflow-y-auto border border-[#F1F1F2] rounded-2xl bg-white">
        <table className="min-w-[900px] sm:min-w-[1080px] w-full">
          <thead className="sticky top-0 z-10 bg-white">
            <tr>
              <th colSpan={6} className="px-6 pt-7.5 pb-5 text-left bg-white">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[#3F4254] font-semibold text-[18px] leading-4.5">
                    Browse All Fabrics
                  </p>
                </div>
              </th>
            </tr>
            <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] border-b border-[#F1F1F2]">
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Fabric Name
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Material Type
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Current Status
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Shipment ID
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Type of Furniture
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item, index) => (
              <tr
                key={index}
                onClick={() => onRowClick(item)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.fabricName}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.materialType}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-4 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                 
                  <span className="inline-flex items-center px-3 py-1 bg-[#F7E9D8] text-[#FF8800] rounded-sm text-[13px] font-semibold font-poppins">
                    {item.currentStatus}
                  </span>{" "}
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.shipmentId}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-poppins font-semibold text-[13px] text-[#48525B]">
                    {item.furnitureType}
                  </span>
                </td>
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2]">
                  <div className="flex items-center justify-center px-4 py-1  bg-[#F5F5F6] w-[34px] h-[34px]">
                    <BsChatSquareDotsFill className="text-[#A1A5B7] text-[18px]" />
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

export default FabricTable;
