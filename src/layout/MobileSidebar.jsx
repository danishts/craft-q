// import React from "react";
// import { NavLink } from "react-router-dom";

// function MobileSidebar({ open, onClose }) {
//   return (
//     <>
//       {/* Overlay */}
//       {open && (
//         <div
//           onClick={onClose}
//           className="fixed inset-0 bg-black/50 z-40 md:hidden"
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-[280px] bg-[#745535] text-white p-5 z-50 transform transition-transform duration-300 md:hidden ${
//           open ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         {/* Close button */}
//         <div className="flex justify-end mb-6">
//           <button onClick={onClose} className="text-xl">
//             ✕
//           </button>
//         </div>

//         {/* Menu */}
//         <nav className="space-y-4">
//           <NavLink onClick={onClose} to="/" className="block">
//             Dashboard
//           </NavLink>

//           <NavLink onClick={onClose} to="/quotes" className="block">
//             Upholstery Quotes
//           </NavLink>

//           <NavLink onClick={onClose} to="/pillow-orders" className="block">
//             Pillow Orders
//           </NavLink>

//           <NavLink onClick={onClose} to="/bookings" className="block">
//             Bookings
//           </NavLink>

//           <NavLink onClick={onClose} to="/fabric" className="block">
//             Fabric Management
//           </NavLink>

//           <NavLink onClick={onClose} to="/tracker" className="block">
//             Order Tracker
//           </NavLink>
//         </nav>
//       </div>
//     </>
//   );
// }

// export default MobileSidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaBed,
  FaCalendarAlt,
  FaLayerGroup,
  FaTruck,
} from "react-icons/fa";

function MobileSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#745535] text-white p-5 z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex justify-end mb-6">
          <button onClick={onClose} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="space-y-3">
          <NavLink
            onClick={onClose}
            to="/"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaTachometerAlt />
            Dashboard
          </NavLink>

          <NavLink
            onClick={onClose}
            to="/quotes"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaFileAlt />
            Upholstery Quotes
          </NavLink>

          <NavLink
            onClick={onClose}
            to="/pillow-orders"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaBed />
            Pillow Orders
          </NavLink>

          <NavLink
            onClick={onClose}
            to="/bookings"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaCalendarAlt />
            Bookings
          </NavLink>

          <NavLink
            onClick={onClose}
            to="/fabric"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaLayerGroup />
            Fabric Management
          </NavLink>

          <NavLink
            onClick={onClose}
            to="/tracker"
            className="flex items-center gap-3 p-2 rounded hover:bg-white/10"
          >
            <FaTruck />
            Order Tracker
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default MobileSidebar;