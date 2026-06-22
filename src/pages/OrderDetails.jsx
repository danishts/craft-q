// // import { useLocation } from "react-router-dom";

// // function OrderDetails() {
// //   const { state } = useLocation();

// //   return (
// //     <div className="">
// //       <h1 className="w-[115px] h-[22px] font-inter font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#020617]">
// //         Order Details
// //       </h1>

// //       <div className="mt-4 bg-gray-100 p-4 rounded">
// //         <p>Client: {state?.client}</p>
// //         <p>Item: {state?.itemType}</p>
// //         <p>Status: {state?.status}</p>
// //         <p>Priority: {state?.priority}</p>
// //         <p>Date: {state?.date}</p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OrderDetails;
// import { useLocation, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div className="">
//       {/* HEADER */}
//       <div className="flex items-center h-[33px] gap-3">
//         {/* Back Icon */}
//         <button
//           onClick={() => navigate(-1)}
//           className="text-[#020617] hover:text-gray-600"
//         >
//           <IoArrowBack size={20} />
//         </button>

//         {/* Title */}
//         <h1 className="w-[115px] h-[22px] font-inter font-semibold text-[18px] leading-[100%] tracking-[0%] text-[#020617]">
//           Order Details
//         </h1>
//       </div>

//       {/* DATA */}
//       <div className="mt-4 bg-gray-100 p-4 rounded">
//         <p>Client: {state?.client}</p>
//         <p>Item: {state?.itemType}</p>
//         <p>Status: {state?.status}</p>
//         <p>Priority: {state?.priority}</p>
//         <p>Date: {state?.date}</p>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;

// import { useLocation, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   return (
//     <div className="">
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => navigate(-1)} className="text-[#020617]">
//             <IoArrowBack size={20} />
//           </button>

//           <h1 className="font-inter font-semibold text-[18px] leading-[100%] text-[#020617]">
//             Order Details
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {/* Label */}
//           <p className="font-inter font-medium text-[16px] text-[#484C5D]">
//             Update Order Status
//           </p>

//           {/* Dropdown */}
//           <select className="bg-[#E8FFF3] px-3 py-2 rounded-[23px] text-[14px] font-medium outline-none">
//             <option>Pending</option>
//             <option>On Route</option>
//             <option>Delivered</option>
//             <option>Cancelled</option>
//           </select>
//         </div>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="mt-4 bg-gray-100 p-4 rounded">
//         <p>Client: {state?.client}</p>
//         <p>Item: {state?.itemType}</p>
//         <p>Status: {state?.status}</p>
//         <p>Priority: {state?.priority}</p>
//         <p>Date: {state?.date}</p>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;

// import { useLocation, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";
// import { useState } from "react";

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [status, setStatus] = useState("Pending");
//   const [open, setOpen] = useState(false);

//   const options = ["Pending", "On Route", "Delivered", "Cancelled"];

//   return (
//     <div className="">
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => navigate(-1)} className="text-[#020617]">
//             <IoArrowBack size={20} />
//           </button>

//           <h1 className="font-inter font-semibold text-[18px] leading-[100%] text-[#020617]">
//             Order Details
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {/* LABEL */}
//           <p className="font-inter font-medium text-[16px] text-[#484C5D]">
//             Update Order Status
//           </p>

//           {/* CUSTOM DROPDOWN */}
//           <div className="relative">
//             {/* MAIN BOX */}
//             <div
//               onClick={() => setOpen(!open)}
//               className="flex items-center justify-between gap-[8px] w-[96px] h-[33px] px-[12px] bg-[#E8FFF3] rounded-[23px] cursor-pointer"
//             >
//               <span className="text-[12px] font-medium text-[#50CD89] leading-[9px]">
//                 {status}
//               </span>

//               <svg
//                 width="10"
//                 height="7"
//                 viewBox="0 0 10 7"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M1 1.5L5 5.5L9 1.5"
//                   stroke="#50CD89"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>

//             {/* DROPDOWN */}
//             {open && (
//               <div className="absolute mt-2 w-[96px] bg-white border rounded-lg shadow-md overflow-hidden">
//                 {options.map((item, i) => (
//                   <div
//                     key={i}
//                     onClick={() => {
//                       setStatus(item);
//                       setOpen(false);
//                     }}
//                     className="px-2 py-2 text-[12px] text-[#50CD89] hover:bg-[#E8FFF3] cursor-pointer"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="mt-4  p-4 rounded">
//         <p>Client: {state?.client}</p>
//         <p>Item: {state?.itemType}</p>
//         <p>Status: {state?.status}</p>
//         <p>Priority: {state?.priority}</p>
//         <p>Date: {state?.date}</p>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;

// import { useLocation, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";
// import { useState } from "react";

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [status, setStatus] = useState("Pending");
//   const [open, setOpen] = useState(false);

//   const options = ["Pending", "On Route", "Delivered", "Cancelled"];

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => navigate(-1)} className="text-[#020617]">
//             <IoArrowBack size={20} />
//           </button>

//           <h1 className="font-semibold text-[18px] text-[#020617]">
//             Order Details
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           <p className="font-medium text-[16px] text-[#484C5D]">
//             Update Order Status
//           </p>

//           {/* CUSTOM DROPDOWN */}
//           <div className="relative">
//             <div
//               onClick={() => setOpen(!open)}
//               className="flex items-center justify-between gap-2 w-[96px] h-[33px] px-3 bg-[#E8FFF3] rounded-[23px] cursor-pointer"
//             >
//               <span className="text-[12px] font-medium text-[#50CD89]">
//                 {status}
//               </span>

//               <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
//                 <path
//                   d="M1 1.5L5 5.5L9 1.5"
//                   stroke="#50CD89"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>

//             {open && (
//               <div className="absolute mt-2 w-[96px] bg-white border rounded-lg shadow-md overflow-hidden">
//                 {options.map((item, i) => (
//                   <div
//                     key={i}
//                     onClick={() => {
//                       setStatus(item);
//                       setOpen(false);
//                     }}
//                     className="px-2 py-2 text-[12px] text-[#50CD89] hover:bg-[#E8FFF3] cursor-pointer"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* ================= TOP HORIZONTAL DIV ================= */}
//       <div className="mt-6 flex items-center gap-6 w-full h-[70px] px-6 py-4 bg-white border border-[#E2E8F0] rounded-xl">
//         {/* Order ID */}
//         <div className="flex flex-col">
//           <span className="text-[12px] text-[#64748B]">Order ID</span>
//           <span className="text-[16px] font-semibold text-[#020617]">
//             #12458
//           </span>
//         </div>

//         {/* Client */}
//         <div className="flex flex-col">
//           <span className="text-[12px] text-[#64748B]">Client</span>
//           <span className="text-[16px] font-semibold text-[#020617]">
//             {state?.client}
//           </span>
//         </div>

//         {/* Item */}
//         <div className="flex flex-col">
//           <span className="text-[12px] text-[#64748B]">Item Type</span>
//           <span className="text-[16px] font-semibold text-[#020617]">
//             {state?.itemType}
//           </span>
//         </div>

//         {/* Priority */}
//         <div className="flex flex-col">
//           <span className="text-[12px] text-[#64748B]">Priority</span>
//           <span className="text-[16px] font-semibold text-[#020617]">
//             {state?.priority}
//           </span>
//         </div>

//         {/* Date */}
//         <div className="flex flex-col">
//           <span className="text-[12px] text-[#64748B]">Date</span>
//           <span className="text-[16px] font-semibold text-[#020617]">
//             {state?.date}
//           </span>
//         </div>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="mt-6 p-4 bg-white rounded-xl border border-[#E2E8F0]">
//         <p>Client: {state?.client}</p>
//         <p>Item: {state?.itemType}</p>
//         <p>Status: {state?.status}</p>
//         <p>Priority: {state?.priority}</p>
//         <p>Date: {state?.date}</p>
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;

// import { useLocation, useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";
// import { useState } from "react";
// import fImg from "../assets/f.png";
// import {
//   MdOutlineEmail,
//   MdOutlinePhone,
//   MdOutlineLocationOn,
// } from "react-icons/md";

// function OrderDetails() {
//   const { state } = useLocation();
//   const navigate = useNavigate();

//   const [status, setStatus] = useState("Pending");
//   const [open, setOpen] = useState(false);
//    const [activeTab, setActiveTab] = useState("furniture");

  
//   const options = ["Pending", "On Route", "Delivered", "Cancelled"];

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         {/* LEFT SIDE */}
//         <div className="flex items-center gap-3">
//           <button onClick={() => navigate(-1)} className="text-[#020617]">
//             <IoArrowBack size={20} />
//           </button>

//           {/* <h1 className="font-semibold text-[18px] text-[#020617]">
//             Order Details
//           </h1> */}
//           <h1 className="font-semibold text-[18px] text-[#020617]">
//             {activeTab === "furniture" ? "Order Details" : "Seller Details"}
//           </h1>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex items-center gap-4">
//           {activeTab === "furniture" && (
//             <p className="font-medium text-[16px] text-[#484C5D]">
//               Update Order Status
//             </p>
//           )}
//           {/* CUSTOM DROPDOWN */}
//           <div className="relative">
//             <div
//               onClick={() => setOpen(!open)}
//               className="flex items-center justify-between gap-2 w-[96px] h-[33px] px-3 bg-[#E8FFF3] rounded-[23px] cursor-pointer"
//             >
//               <span className="text-[12px] font-medium text-[#50CD89]">
//                 {status}
//               </span>

//               <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
//                 <path
//                   d="M1 1.5L5 5.5L9 1.5"
//                   stroke="#50CD89"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </div>

//             {open && (
//               <div className="absolute mt-2 w-[96px] bg-white border rounded-lg shadow-md overflow-hidden">
//                 {options.map((item, i) => (
//                   <div
//                     key={i}
//                     onClick={() => {
//                       setStatus(item);
//                       setOpen(false);
//                     }}
//                     className="px-2 py-2 text-[12px] text-[#50CD89] hover:bg-[#E8FFF3] cursor-pointer"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* ================= CUSTOMER INFO (FIGMA STYLE) ================= */}
//       {/* ================= CUSTOMER INFO ================= */}
//       <div className="mt-6 flex items-center justify-between w-full">
//         {/* LEFT SIDE (IMAGE + DETAILS) */}
//         <div className="flex items-center gap-6">
//           {/* IMAGE */}
//           <img
//             src="https://i.pravatar.cc/150"
//             alt="customer"
//             className="w-[70px] h-[70px] rounded-[105.71px] object-cover"
//           />

//           {/* TEXT AREA */}
//           <div className="flex flex-col gap-[8px]">
//             {/* NAME */}
//             <h2 className="font-inter font-semibold text-[24px] leading-[100%] text-[#151515]">
//               {state?.client || "Max Kent"}
//             </h2>

//             {/* DETAILS ROW */}
//             <div className="flex items-center gap-[8px] flex-wrap">
//               {/* EMAIL */}
//               <div className="flex items-center gap-[5px] h-[22px]">
//                 <MdOutlineEmail size={18} className="text-[#3A2414]" />
//                 <span className="text-[15px] font-semibold text-[#A1A5B7]">
//                   max@kt.com
//                 </span>
//               </div>

//               {/* PHONE */}
//               <div className="flex items-center gap-[5px] h-[22px]">
//                 <MdOutlinePhone size={18} className="text-[#3A2414]" />
//                 <span className="text-[15px] font-semibold text-[#A1A5B7]">
//                   +92316-456262
//                 </span>
//               </div>

//               {/* ADDRESS */}
//               <div className="flex items-center gap-[5px] h-[22px]">
//                 <MdOutlineLocationOn size={18} className="text-[#3A2414]" />
//                 <span className="text-[15px] font-semibold text-[#A1A5B7]">
//                   6659 Joe Cape, Mexico
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE BUTTON */}
//         {/* <button className="flex items-center justify-center gap-[8px] px-[12px] h-[33px] bg-[#3A2414] rounded-[23px] whitespace-nowrap">
//           <span className="text-white font-medium text-[13px] leading-[8.19px]">
//             Assign Vendor
//           </span>
//         </button> */}
//         {activeTab === "furniture" && (
//           <button className="flex items-center justify-center gap-[8px] px-[12px] h-[33px] bg-[#3A2414] rounded-[23px] whitespace-nowrap">
//             <span className="text-white font-medium text-[13px] leading-[8.19px]">
//               Assign Vendor
//             </span>
//           </button>
//         )}
//       </div>
//       {/* CUSTOMER INFO KE BAAD */}
//       {/* <div className="mt-6 flex items-center gap-6 border-b border-[#E2E8F0]">
//         <button
//           onClick={() => setActiveTab("furniture")}
//           className={`pb-2 text-[14px] font-semibold ${
//             activeTab === "furniture"
//               ? "text-[#3A2414] border-b-2 border-[#3A2414]"
//               : "text-[#A1A5B7]"
//           }`}
//         >
//           Furniture
//         </button>

//         <button
//           onClick={() => setActiveTab("track")}
//           className={`pb-2 text-[14px] font-medium ${
//             activeTab === "track"
//               ? "text-[#3A2414] border-b-2 border-[#3A2414]"
//               : "text-[#A1A5B7]"
//           }`}
//         >
//           Orders Track
//         </button>
//       </div> */}
//       {/* ================= TABS ================= */}
//       <div className="mt-6 flex items-center gap-6 border-b border-[#E2E8F0]">
//         {/* FURNITURE TAB */}
//         <button
//           onClick={() => setActiveTab("furniture")}
//           className={`pb-2 text-[14px] font-semibold ${
//             activeTab === "furniture"
//               ? "text-[#3A2414] border-b-2 border-[#3A2414]"
//               : "text-[#A1A5B7]"
//           }`}
//         >
//           Furniture
//         </button>

//         {/* ORDERS TRACK TAB */}
//         <button
//           onClick={() => setActiveTab("track")}
//           className={`pb-2 text-[14px] font-semibold ${
//             activeTab === "track"
//               ? "text-[#3A2414] border-b-2 border-[#3A2414]"
//               : "text-[#A1A5B7]"
//           }`}
//         >
//           Orders Track
//         </button>
//       </div>{" "}
//       {/* ================= CONTENT ================= */}
//       {/* <div className="mt-6 p-4 bg-white ">



//         <p>Client: {state?.client}</p>
//         <p>Item: {state?.itemType}</p>
//         <p>Status: {state?.status}</p>
//         <p>Priority: {state?.priority}</p>
//         <p>Date: {state?.date}</p>
//       </div> */}
//       <div className="mt-6">
//         {/* ================= FURNITURE ================= */}
//         {activeTab === "furniture" && (
//           <div className="flex flex-col lg:flex-row items-start gap-6">
//             <img
//               src={fImg}
//               alt="furniture"
//               className="w-full sm:w-[245.97px] h-auto sm:h-[254.49px] rounded-[19px] object-cover"
//             />

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-[23.38px] w-full lg:w-[441.23px]">
//               <div>
//                 <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
//                   Client
//                 </p>
//                 <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
//                   {state?.client}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
//                   Item
//                 </p>
//                 <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
//                   {state?.itemType}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
//                   Status
//                 </p>
//                 <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
//                   {state?.status}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
//                   Priority
//                 </p>
//                 <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
//                   {state?.priority}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
//                   Date
//                 </p>
//                 <p className="text-[#48525B] font-poppins font-semibold text-[18.66px]">
//                   {state?.date}
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* ================= ORDERS TRACK ================= */}
//         {activeTab === "track" && (
//           <div className="p-6 bg-white rounded-xl border">
//             <h2 className="text-[18px] font-semibold text-[#3A2414]">
//               Orders Track
//             </h2>

//             <p className="text-[#64748B] mt-2">
//               Yahan aapka tracking timeline aayega 🚚
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default OrderDetails;