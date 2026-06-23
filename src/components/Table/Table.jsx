// import React from "react";
// import { BsChatSquareDotsFill } from "react-icons/bs";

// function Table({ data }) {
//   return (
//     <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//       <table className="min-w-[900px] sm:min-w-[1080px] w-full border border-[#F1F1F2] rounded-[12px] border-separate border-spacing-0 bg-white">

//         {/* HEADER */}
//         <thead>
//           <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] leading-[12px] ">
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Client Name
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">Item Type</th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Current Status
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Quote Priority
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Delivery Date
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Operations
//             </th>
//           </tr>
//         </thead>

//         {/* BODY */}
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50 transition-colors">
//               {/* CLIENT */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] leading-[100%] tracking-[0.016em] text-[#48525B]">
//                   {item.client}
//                 </span>
//               </td>

//               {/* ITEM TYPE */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] leading-[100%] tracking-[0.016em] text-[#48525B]">
//                   {item.itemType}
//                 </span>
//               </td>

//               {/* CURRENT STATUS (BADGE) */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="inline-flex items-center justify-center px-2 sm:px-3 py-1 rounded-lg bg-[#FCEFDE] text-[#FF8800] font-poppins font-semibold text-[10px] sm:text-[13px] leading-[100%] tracking-[0.016em]">
//                   {item.status}
//                 </span>
//               </td>

//               {/* PRIORITY */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] leading-[100%] tracking-[0.016em] text-[#48525B]">
//                   {item.priority}
//                 </span>
//               </td>

//               {/* DATE */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] leading-[100%] tracking-[0.016em] text-[#48525B]">
//                   {item.date}
//                 </span>
//               </td>

//               {/* OPERATIONS (CENTER ICON) */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2]">
//                 <div className="flex items-center justify-center text-[#48525B]">
//                   <BsChatSquareDotsFill className="text-[16px] mr-11 sm:text-[18px] text-[#A1A5B7] cursor-pointer hover:text-[#FF8800] transition-colors" />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;

// import React from "react";
// import { BsChatSquareDotsFill } from "react-icons/bs";

// function Table({ data }) {
//   return (
//     <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//       <table className="min-w-[900px] sm:min-w-[1080px] w-full border border-[#F1F1F2]  rounded-2xl bg-white">
//         <thead>
//           {/* Title Row */}
//           <tr>
//             <th
//               colSpan={6}
//               className="px-6 pt-7.5 pb-5 text-left bg-white"
//             >
//               <div className="flex flex-col gap-2.5">
//                 <p className="text-[#3F4254] font-semibold text-[18px] leading-4.5">
//                   Overview of all submitted quotes
//                 </p>
//               </div>
//             </th>
//           </tr>

//           {/* Column Headers */}
//           <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] leading-3  border-[#F1F1F2]">
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Client Name
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Item Type
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Current Status
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Quote Priority
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Delivery Date
//             </th>
//             <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
//               Operations
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-50 transition-colors">
//               {/* CLIENT */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] tracking-[0.016em] text-[#48525B]">
//                   {item.client}
//                 </span>
//               </td>

//               {/* ITEM TYPE */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] tracking-[0.016em] text-[#48525B]">
//                   {item.itemType}
//                 </span>
//               </td>

//               {/* STATUS */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="inline-flex items-center justify-center px-2 sm:px-3 py-1  bg-[#FCEFDE] text-[#FF8800] font-poppins font-semibold text-[10px] sm:text-[13px] tracking-[0.016em]">
//                   {item.status}
//                 </span>
//               </td>

//               {/* PRIORITY */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] tracking-[0.016em] text-[#48525B]">
//                   {item.priority}
//                 </span>
//               </td>

//               {/* DATE */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
//                 <span className="font-poppins font-semibold text-[11px] sm:text-[13px] tracking-[0.016em] text-[#48525B]">
//                   {item.date}
//                 </span>
//               </td>

//               {/* OPERATIONS */}
//               <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2]">
//                 <div className="flex items-center justify-center">
//                   <BsChatSquareDotsFill className="text-[16px] mr-14 sm:text-[18px] text-[#A1A5B7] cursor-pointer hover:text-[#FF8800] transition-colors" />
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;




import React from "react";
import { useNavigate } from "react-router-dom";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

function Table({ data, onDelete, searchTerm = "" }) {


   const navigate = useNavigate();

   const handleClick = (item) => {
     navigate("/order-details", { state: item });
   };

  return (
    <div className="w-full overflow-x-auto">
      {/* 🔥 Scroll container ONLY for rows */}
      <div className="max-h-[450px] overflow-y-auto border border-[#F1F1F2] rounded-2xl bg-white">
        <table className="min-w-[900px] sm:min-w-[1080px] w-full">
          {/* ================= HEADER ================= */}
          <thead className="sticky top-0 z-10 bg-white">
            {/* Title Row */}
            <tr>
              <th colSpan={6} className="px-6 pt-7.5 pb-5 text-left bg-white">
                <div className="flex flex-col gap-2.5">
                  <p className="text-[#3F4254] font-semibold text-[18px] leading-4.5">
                    Overview of all submitted quotes
                  </p>
                </div>
              </th>
            </tr>

            {/* Column Headers */}
            <tr className="text-[#A1A5B7] font-semibold text-[10px] sm:text-[12px] border-b border-[#F1F1F2]">
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Client Name
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Item Type
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Current Status
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Quote Priority
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Delivery Date
              </th>
              <th className="px-3 sm:px-6 py-3 sm:py-5 text-left whitespace-nowrap">
                Operations
              </th>
            </tr>
          </thead>

          {/* ================= BODY ================= */}
          <tbody>
            {data
              .filter((item) => {
                if (!searchTerm) return true;
                const q = searchTerm.toLowerCase();
                return (
                  (item.client || "").toLowerCase().includes(q) ||
                  (item.itemType || "").toLowerCase().includes(q)
                );
              })
              .map((item, index) => (
              <tr
                key={index}
                onClick={() => handleClick(item)}
                className="cursor-pointer hover:bg-gray-50 transition-colors"
              >
                {/* Client */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-semibold text-[13px] text-[#48525B]">
                    {item.client}
                  </span>
                </td>

                {/* Item */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-semibold text-[13px] text-[#48525B]">
                    {item.itemType}
                  </span>
                </td>

                {/* Status */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="inline-flex items-center px-3 py-1 bg-[#FCEFDE] rounded-sm text-[#FF8800] font-semibold text-[12px] ">
                    {item.status}
                  </span>
                </td>

                {/* Priority */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-semibold text-[13px] text-[#48525B]">
                    {item.priority}
                  </span>
                </td>

                {/* Date */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2] whitespace-nowrap">
                  <span className="font-semibold text-[13px] text-[#48525B]">
                    {item.date}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-3 sm:px-6 py-3 sm:py-5 border-b border-dashed border-[#F1F1F2]">
                  <div className="flex justify-center items-center gap-3">
                    <BsChatSquareDotsFill className="text-[18px] text-[#A1A5B7] cursor-pointer hover:text-[#FF8800] transition-colors" />
                    {onDelete && (
                      <FiTrash2
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(index);
                        }}
                        className="text-[18px] text-[#E11D48] cursor-pointer hover:opacity-80"
                      />
                    )}
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

export default Table;