// import { useState } from "react";
// import Sidebar from "./Sidebar";
// import MobileSidebar from "./MobileSidebar";
// import { Outlet } from "react-router-dom";

// export default function MainLayout() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex h-screen p-11 overflow-hidden">
//       {/* Desktop Sidebar */}
//       <div className="hidden md:block">
//         <Sidebar />
//       </div>

//       {/* Mobile Sidebar */}
//       <MobileSidebar open={open} onClose={() => setOpen(false)} />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <div className="p-3 border-b flex items-center">
//           <button
//             className="md:hidden text-2xl mr-3"
//             onClick={() => setOpen(true)}
//           >
//             ☰
//           </button>

//           <h1 className="font-bold">Dashboard</h1>
//         </div>

//         {/* Page Content */}
//         <div className="flex-1 overflow-y-auto px-6 p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const [open, setOpen] = useState(false);

    return (
  <div className="flex h-screen overflow-x-auto overflow-y-hidden p-0 md:p-4 lg:p-11">
    {/* // <div className="flex h-screen p-11 overflow-hidden"> */}
      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:block shrink-0">
        <Sidebar />
      </div>

      {/* MOBILE SIDEBAR */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} />

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* NAVBAR */}
        <Navbar onMenuClick={() => setOpen(true)} />

        {/* PAGE CONTENT (SCROLL ONLY HERE) */}
        <div className="flex-1 overflow-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 md:py-6 lg:py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}