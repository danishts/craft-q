import React from "react";
import DashboardStatCard from "../components/DashboardStatCard";
import {
  FiFileText,
  FiShoppingCart,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import UpholsteryQuotes from "./UpholsteryQuotes";
import { useNavigate } from "react-router-dom";
import PillowOrders from "./PillowOrders";
import Bookings from "./Bookings";

function Dashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <FiFileText size={20} />,
      value: 25,
      label: "New Quotes Submitted",
    },
    { icon: <FiShoppingCart size={20} />, value: 18, label: "Orders Received" },
    { icon: <FiClock size={20} />, value: 12, label: "Pending Orders" },
    { icon: <FiCheckCircle size={20} />, value: 7, label: "Delivered Orders" },
    { icon: <FiShoppingCart size={20} />, value: 30, label: "Active Orders" },
    { icon: <FiFileText size={20} />, value: 5000, label: "Revenue" },
  ];

  return (
    <div className="w-full">
      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stats.map((item, index) => (
          <DashboardStatCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
          />
        ))}
      </div>

      {/* TABLE */}
      <div className="mt-6">
        <UpholsteryQuotes  />

        {/* ✅ VIEW MORE BUTTON */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => navigate("/quotes")}
            className="flex items-center justify-center gap-[3.06px] px-2 py-2 rounded-[3.06px] bg-[#D3D3D363]"
          >
            <span className="text-[12.24px] font-semibold text-[#343434] leading-[9.18px]">
              View more
            </span>
          </button>
        </div>
      </div>

      <div className="mt-6">
        <PillowOrders hideHeader={true} />

        {/* ✅ VIEW MORE BUTTON */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => navigate("/pillow-orders")}
            className="flex items-center justify-center gap-[3.06px] px-2 py-2 rounded-[3.06px] bg-[#D3D3D363]"
          >
            <span className="text-[12.24px] font-semibold text-[#343434] leading-[9.18px]">
              View more
            </span>
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Bookings hideHeader={true} />

        {/* ✅ VIEW MORE BUTTON */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => navigate("/bookings")}
            className="flex items-center justify-center gap-[3.06px] px-2 py-2 rounded-[3.06px] bg-[#D3D3D363]"
          >
            <span className="text-[12.24px] font-semibold text-[#343434] leading-[9.18px]">
              View more
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
