// import React from "react";
// import { FiTrash2 } from "react-icons/fi";

// function PillowOrdersTable() {
//   const data = [
//     {
//       customer: "Emily R.",
//       pillow: "Memory Foam Pillow",
//       status: "On the Way",
//       fabric: "Cotton Blend",
//       date: "06/15/2025",
//     },
//     {
//       customer: "John M.",
//       pillow: "Neck Support Pillow",
//       status: "On the Way",
//       fabric: "Silk",
//       date: "06/12/2025",
//     },
//   ];

//   return (
//     <div className="w-full border border-[#F1F1F2] rounded-xl p-[30px] bg-white">
//       {/* Heading */}
//       <h2 className="text-[18px] font-semibold font-poppins text-[#3F4254] mb-8">
//         Overview of All Pillow Orders
//       </h2>

//       {/* Table */}
//       <div className="w-full overflow-x-auto whitespace-nowrap">
//         <table className="w-full">
//           {/* Header */}
//           <thead>
//             <tr className="border-b border-dashed border-[#F1F1F2]">
//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Customer Name
//               </th>

//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Pillow Type & Qty
//               </th>

//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Status
//               </th>

//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Fabric Type
//               </th>

//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Order Date
//               </th>

//               <th className="text-left pb-5 text-[12px] font-semibold text-[#A1A5B7]">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {data.map((item, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-dashed border-[#F1F1F2]"
//               >
//                 {/* Customer */}
//                 <td className="py-5">
//                   <p className="text-[13px] font-semibold text-[#48525B]">
//                     {item.customer}
//                   </p>
//                 </td>

//                 {/* Pillow */}
//                 <td className="py-5">
//                   <p className="text-[13px] font-semibold text-[#48525B]">
//                     {item.pillow}
//                   </p>
//                 </td>

//                 {/* Status */}
//                 <td className="py-5">
//                   <div className="flex items-center gap-[10px]">
//                     <span className="px-3 py-1 bg-[#F7E9D8] text-[#FF8800] rounded-sm text-[12.24px] font-semibold">
//                       {item.status}
//                     </span>
//                   </div>
//                 </td>

//                 {/* Fabric */}
//                 <td className="py-5">
//                   <p className="text-[13px] font-semibold text-[#48525B]">
//                     {item.fabric}
//                   </p>
//                 </td>

//                 {/* Date */}
//                 <td className="py-5">
//                   <p className="text-[13px] font-semibold text-[#48525B]">
//                     {item.date}
//                   </p>
//                 </td>

//                 {/* Action */}
//                 <td className="py-5">
//                   <button>
//                     <FiTrash2
//                       size={18}
//                       className="text-[#A1A5B7] hover:text-red-500"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PillowOrdersTable;

// import React from "react";
// import { FiTrash2 } from "react-icons/fi";

// function PillowOrdersTable() {
//   const data = [
//     {
//       customer: "Emily R.",
//       pillow: "Memory Foam Pillow",
//       status: "On the Way",
//       fabric: "Cotton Blend",
//       date: "06/15/2025",
//     },
//     {
//       customer: "John M.",
//       pillow: "Neck Support Pillow",
//       status: "On the Way",
//       fabric: "Silk",
//       date: "06/12/2025",
//       },
//       {
//       customer: "Emily R.",
//       pillow: "Memory Foam Pillow",
//       status: "On the Way",
//       fabric: "Cotton Blend",
//       date: "06/15/2025",
//     },
//     {
//       customer: "John M.",
//       pillow: "Neck Support Pillow",
//       status: "On the Way",
//       fabric: "Silk",
//       date: "06/12/2025",
//     },
//   ];

//   return (
//     <div className="w-full border border-[#F1F1F2] rounded-xl p-4 sm:p-[30px] bg-white">
//       {/* Heading */}
//       <h2 className="text-[16px] sm:text-[18px] font-semibold font-poppins text-[#3F4254] mb-6 sm:mb-8">
//         Overview of All Pillow Orders
//       </h2>

//       {/* Table Wrapper */}
//       <div className="w-full overflow-x-auto">
//         <table className="min-w-[900px] w-full">
//           {/* Header */}
//           <thead>
//             <tr className="border-b border-dashed border-[#F1F1F2]">
//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Customer Name
//               </th>

//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Pillow Type & Qty
//               </th>

//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Status
//               </th>

//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Fabric Type
//               </th>

//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Order Date
//               </th>

//               <th className="text-left pb-4 sm:pb-5 text-[11px] sm:text-[12px] font-semibold text-[#A1A5B7]">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           {/* Body */}
//           <tbody>
//             {data.map((item, index) => (
//               <tr
//                 key={index}
//                 className="border-b border-dashed border-[#F1F1F2]"
//               >
//                 {/* Customer */}
//                 <td className="py-4 sm:py-5">
//                   <p className="text-[12px] sm:text-[13px] font-semibold text-[#48525B]">
//                     {item.customer}
//                   </p>
//                 </td>

//                 {/* Pillow */}
//                 <td className="py-4 sm:py-5">
//                   <p className="text-[12px] sm:text-[13px] font-semibold text-[#48525B]">
//                     {item.pillow}
//                   </p>
//                 </td>

//                 {/* Status */}
//                 <td className="py-4 sm:py-5">
//                   <span className="inline-block px-2 sm:px-3 py-1 bg-[#F7E9D8] text-[#FF8800] rounded-full text-[11px] sm:text-[12.24px] font-semibold">
//                     {item.status}
//                   </span>
//                 </td>

//                 {/* Fabric */}
//                 <td className="py-4 sm:py-5">
//                   <p className="text-[12px] sm:text-[13px] font-semibold text-[#48525B]">
//                     {item.fabric}
//                   </p>
//                 </td>

//                 {/* Date */}
//                 <td className="py-4 sm:py-5">
//                   <p className="text-[12px] sm:text-[13px] font-semibold text-[#48525B]">
//                     {item.date}
//                   </p>
//                 </td>

//                 {/* Action */}
//                 <td className="py-4 sm:py-5">
//                   <button className="text-[#A1A5B7] hover:text-red-500">
//                     <FiTrash2 size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default PillowOrdersTable;

// import React from "react";
// import { FiTrash2 } from "react-icons/fi";

// function PillowOrdersTable() {
//   const data = [
//     {
//       customer: "Emily R.",
//       pillow: "Memory Foam Pillow",
//       status: "On the Way",
//       fabric: "Cotton Blend",
//       date: "06/15/2025",
//     },
//     {
//       customer: "John M.",
//       pillow: "Neck Support Pillow",
//       status: "On the Way",
//       fabric: "Silk",
//       date: "06/12/2025",
//     },
//     {
//       customer: "Emily R.",
//       pillow: "Memory Foam Pillow",
//       status: "On the Way",
//       fabric: "Cotton Blend",
//       date: "06/15/2025",
//     },
//     {
//       customer: "John M.",
//       pillow: "Neck Support Pillow",
//       status: "On the Way",
//       fabric: "Silk",
//       date: "06/12/2025",
//     },

//   ];

//   return (
//     <div className="w-full border border-[#F1F1F2] rounded-xl p-4 sm:p-[30px] bg-white">
//       {/* Heading */}
//       <h2 className="text-[16px] sm:text-[18px] font-semibold font-poppins text-[#3F4254] mb-6 sm:mb-8">
//         Overview of All Pillow Orders
//       </h2>

//       {/* ✅ ONLY TABLE SCROLL AREA */}
//       <div className="w-full overflow-x-auto">
//         <div className="min-w-[900px]">
//           <table className="w-full">
//             {/* Header */}
//             <thead>
//               <tr className="border-b border-dashed border-[#F1F1F2]">
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Customer Name
//                 </th>
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Pillow Type & Qty
//                 </th>
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Status
//                 </th>
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Fabric Type
//                 </th>
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Order Date
//                 </th>
//                 <th className="text-left pb-4 text-[12px] font-semibold text-[#A1A5B7]">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             {/* Body */}
//             <tbody>
//               {data.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="border-b border-dashed border-[#F1F1F2]"
//                 >
//                   <td className="py-4 text-[13px] font-semibold text-[#48525B]">
//                     {item.customer}
//                   </td>

//                   <td className="py-4 text-[13px] font-semibold text-[#48525B]">
//                     {item.pillow}
//                   </td>

//                   <td className="py-4">
//                     <span className="inline-block px-3 py-1 bg-[#F7E9D8] text-[#FF8800] rounded-full text-[12px] font-semibold">
//                       {item.status}
//                     </span>
//                   </td>

//                   <td className="py-4 text-[13px] font-semibold text-[#48525B]">
//                     {item.fabric}
//                   </td>

//                   <td className="py-4 text-[13px] font-semibold text-[#48525B]">
//                     {item.date}
//                   </td>

//                   <td className="py-4">
//                     <button className="text-[#A1A5B7] hover:text-red-500">
//                       <FiTrash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PillowOrdersTable;

import React from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

function PillowOrdersTable({ data, onDelete, onRowClick }) {
  return (
    <div className="w-full border border-[#F1F1F2] rounded-xl p-4 sm:p-[30px] bg-white">
      <h2 className="text-[16px] sm:text-[18px] font-semibold font-poppins text-[#3F4254] mb-6 sm:mb-8">
        Overview of All Pillow Orders
      </h2>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[900px]">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dashed border-[#F1F1F2]">
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Customer
                </th>
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Pillow
                </th>
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Status
                </th>
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Fabric
                </th>
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Date
                </th>
                <th className="text-left pb-4 text-[12px] text-[#A1A5B7]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick(item)} // 👈 CLICK HERE
                  className="border-b border-dashed border-[#F1F1F2] cursor-pointer hover:bg-gray-50"
                >
                  <td className="py-4 text-[13px] font-semibold text-[#48525B]">
                    {item.customer}
                  </td>

                  <td className="py-4 text-[13px] font-semibold text-[#48525B]">
                    {item.pillow}
                  </td>

                  <td className="py-4">
                    <span className="px-3 py-1 bg-[#F7E9D8] text-[#FF8800] rounded-full text-[12px] font-semibold">
                      {item.status}
                    </span>
                  </td>

                  <td className="py-4 text-[13px] font-semibold text-[#48525B]">
                    {item.fabric}
                  </td>

                  <td className="py-4 text-[13px] font-semibold text-[#48525B]">
                    {item.date}
                  </td>

                  <td className="py-4">
                    <div className="flex items-center justify-center gap-3">
                      <BsChatSquareDotsFill className="text-[18px] text-[#A1A5B7] cursor-pointer hover:text-[#FF8800] transition-colors" />
                      {onDelete && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onDelete(index);
                          }}
                          className="text-[#E11D48] hover:opacity-80"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      )}
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

export default PillowOrdersTable;