// import React from "react";
// import PageHeader from "../components/PageHeader";
// import PillowOrdersTable from "../components/PillowOrdersTable";

// function PillowOrders() {
//   return (
//     <div>
//       <PageHeader title="Pillow Orders" />

//       <div className="mt-6">
//         <PillowOrdersTable />
//       </div>
//     </div>
//   );
// }

// export default PillowOrders;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PillowOrdersTable from "../components/PillowOrdersTable";


function PillowOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [orders] = useState([
    {
      customer: "Emily R.",
      pillow: "Memory Foam Pillow",
      status: "On the Way",
      fabric: "Cotton Blend",
      date: "06/15/2025",
    },
    {
      customer: "John M.",
      pillow: "Neck Support Pillow",
      status: "Delivered",
      fabric: "Silk",
      date: "06/12/2025",
    },
  ]);

  const handleRowClick = (item) => {
    navigate("/pillow-order-details", {
      state: item,
    });
  };

  const filteredOrders = orders.filter((item) => {
    if (!searchTerm) return true;
    const query = searchTerm.toLowerCase();
    return (
      item.customer.toLowerCase().includes(query) ||
      item.pillow.toLowerCase().includes(query) ||
      item.fabric.toLowerCase().includes(query) ||
      item.date.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <PageHeader
        title="Pillow Orders"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="mt-6">
        <PillowOrdersTable data={filteredOrders} onRowClick={handleRowClick} />
      </div>
    </div>
  );
}

export default PillowOrders;