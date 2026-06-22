// import React from "react";
// import { FiShield } from "react-icons/fi";

// function Navbar({ onMenuClick }) {
//   return (
//     <div className="flex items-center justify-between px-4 md:px-6 py-3 ">
//       {/* LEFT SIDE */}
//       <div className="flex items-center gap-3">
//         {/* HAMBURGER (MOBILE ONLY - LEFT SIDE) */}
//         <button onClick={onMenuClick} className="md:hidden text-2xl">
//           ☰
//         </button>

//         {/* TEXT (ONLY DESKTOP) */}
//         <div className="hidden md:flex flex-col">
//           <p className="text-[14px] font-medium font-[Inter] leading-none">
//             Wednesday, February 14th
//           </p>

//           <h1 className="text-[32px] font-medium font-[Inter] leading-none mt-1">
//             Good Evening, Jack
//           </h1>
//         </div>
//       </div>

//       {/* RIGHT SIDE CARD */}
//       <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-[12px] md:py-[9px] border border-dashed border-gray-400 rounded-[6px]">
//         {/* AVATAR */}
//         <div className="w-[30px] md:w-[38px] h-[30px] md:h-[38px] rounded-full bg-gray-300"></div>

//         {/* TEXT */}
//         <div className="leading-none">
//           {/* NAME */}
//           <p className="text-[13px] md:text-[16px] font-semibold font-[Poppins]">
//             Jack Ronson
//           </p>

//           {/* ADMIN */}
//           <div className="flex items-center gap-1 opacity-70">
//             <FiShield className="text-[12px] md:text-[14px]" />

//             <p className="font-[Poppins] font-normal text-[12px] md:text-[14px]">
//               Admin
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Navbar;import React from "react";


import { FiLogOut } from "react-icons/fi";

function Navbar({ onMenuClick }) {
  return (
    <nav className="w-full bg-white  border-[#F1F1F2]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* HAMBURGER - Mobile Only */}
          <button
            onClick={onMenuClick}
            className="sm:hidden shrink-0 text-2xl text-[#48525B] p-1 hover:bg-gray-100 rounded transition-colors"
          >
            ☰
          </button>

          {/* DATE + GREETING */}
          <div className="flex flex-col min-w-0 flex-1 sm:flex-none">
            <p className="text-xs sm:text-sm font-medium font-[Inter] text-[#48525B] truncate">
              Wednesday, February 14th
            </p>

            <h1 className="text-lg sm:text-2xl md:text-[32px] font-medium font-[Inter] text-[#1E293B] truncate">
              Good Evening, Jack
            </h1>
          </div>
        </div>

        {/* RIGHT PROFILE CARD */}
        <div className="w-full sm:w-auto flex items-center justify-between gap-2 sm:gap-4 border border-dashed border-[#0206171A] rounded-md px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 hover:bg-gray-100 transition-colors">
          {/* Profile Info */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {/* Avatar */}
            <div className="w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-full bg-linear-to-br from-blue-400 to-blue-600 shrink-0"></div>

            {/* Name & Role */}
            <div className="min-w-0">
              <p className="text-sm sm:text-[16px] font-semibold font-[Poppins] text-[#1E293B] truncate">
                Jack Ronson
              </p>

              <p className="text-[12px] sm:text-[14px] font-normal font-[Poppins] text-[#64748B] truncate">
                Admin
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button className="flex items-center justify-center shrink-0 p-1.5 sm:p-2 text-[#48525B] hover:text-red-500 hover:bg-red-50 rounded transition-all duration-200">
            <FiLogOut className="text-[16px] sm:text-[18px]" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;