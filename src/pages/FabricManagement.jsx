import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import FabricTable from "../components/FabricTable";

const fabricData = [
  {
    fabricName: "Satin Fabric",
    materialType: "COM/Process",
    currentStatus: "On Route",
    shipmentId: "12345678901",
    furnitureType: "Sofa",
    supplier: "Elite Fabrics",
    arrivalDate: "05/10/2025",
    batchNumber: "BATCH-2490",
  },
  {
    fabricName: "Polyester Fabric",
    materialType: "COM/Process",
    currentStatus: "Delivered",
    shipmentId: "12345678902",
    furnitureType: "Chair",
    supplier: "Urban Textiles",
    arrivalDate: "05/02/2025",
    batchNumber: "BATCH-2491",
  },
  {
    fabricName: "Velvet Fabric",
    materialType: "Process",
    currentStatus: "In Warehouse",
    shipmentId: "12345678903",
    furnitureType: "Ottoman",
    supplier: "Luxury Weaves",
    arrivalDate: "05/08/2025",
    batchNumber: "BATCH-2492",
  },
];

function FabricManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRowClick = (fabric) => {
    navigate("/fabric-details", { state: fabric });
  };

  return (
    <div>
      <PageHeader
        title="Browse All Fabrics"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="mt-4">
        <FabricTable data={fabricData} searchTerm={searchTerm} onRowClick={handleRowClick} />
      </div>
    </div>
  );
}

export default FabricManagement;
