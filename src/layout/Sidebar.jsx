// import { NavLink } from "react-router-dom";
// import { sidebarMenu } from "./sidebarMenu";

// export default function Sidebar() {
//   return (
//     <div
//       className="w-[300px] h-[702px] p-6 rounded-3xl  text-white"
//       style={{ backgroundColor: "#745535" }}
//     >
//       <h1 className="text-xl text-center font-bold mb-14">Menu</h1>

//       <div className="space-y-3 ">
//         {sidebarMenu.map((item, i) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={i}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-md transition ${
//                   isActive ? "bg-white text-black" : "hover:bg-white/20"
//                 }`
//               }
//             >
//               <Icon size={20} />
//               {item.title}
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { NavLink } from "react-router-dom";
// import { sidebarMenu } from "./sidebarMenu";

// export default function Sidebar() {
//   return (
//     <div
//       className="
//         hidden md:flex
//         flex-col
//         w-[300px]
//         h-[702px]
//         p-6
//         rounded-3xl
//         text-white
//       "
//       style={{ backgroundColor: "#745535" }}
//     >
//       {/* TITLE */}
//       <h1 className="text-xl text-center font-bold mb-14">Menu</h1>

//       {/* MENU */}
//       <div className="flex flex-col gap-3">
//         {sidebarMenu.map((item, i) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={i}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-md transition
//                 ${isActive ? "bg-white text-black" : "hover:bg-white/20"}`
//               }
//             >
//               <Icon size={20} />
//               {item.title}
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// import { NavLink } from "react-router-dom";
// import { sidebarMenu } from "./sidebarMenu";

// export default function Sidebar() {
//   return (
//     <div
//       className="
//         hidden md:flex
//         flex-col
//         w-[300px]
//         h-full
//         min-h-screen
//         p-6
//         rounded-3xl
//         text-white
//       "
//       style={{ backgroundColor: "#745535" }}
//     >
//       {/* TITLE */}
//       <h1 className="text-xl text-center font-bold mb-14">Menu</h1>

//       {/* MENU */}
//       <div className="flex flex-col gap-3">
//         {sidebarMenu.map((item, i) => {
//           const Icon = item.icon;

//           return (
//             <NavLink
//               key={i}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 p-3 rounded-md transition
//                 ${isActive ? "bg-white text-black" : "hover:bg-white/20"}`
//               }
//             >
//               <Icon size={20} />
//               {item.title}
//             </NavLink>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";
import { sidebarMenu } from "./sidebarMenu";

export default function Sidebar() {
  return (
    <div
      className="
        hidden md:flex
        flex-col
        w-[300px]
        md:h-[702px]
        xl:h-[702px]
        p-6
        rounded-3xl
        text-white
        overflow-hidden
      "
      style={{ backgroundColor: "#745535" }}
    >
      {/* TITLE */}
      <h1 className="text-xl text-center font-bold mb-14">Menu</h1>

      {/* MENU */}
      <div className="flex flex-col gap-3 overflow-y-auto">
        {sidebarMenu.map((item, i) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md transition
                ${isActive ? "bg-white text-black" : "hover:bg-white/20"}`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}