import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./OrderDetails/components/Header";
import CustomerInfo from "./OrderDetails/components/CustomerInfo";

function FabricDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [status, setStatus] = useState(state?.currentStatus || state?.status || "Pending");
  const [open, setOpen] = useState(false);
  const activeTab = "furniture";
  const options = ["Pending", "On Route", "Delivered", "Cancelled"];

  const details = {
    customer: state?.customer || state?.client || "Emily R.",
    email: state?.email || "emily.r@example.com",
    phone: state?.phone || "+1 555 123 4567",
    address: state?.address || "101 Fabric Avenue, Los Angeles",
    fabricName: state?.fabricName || "Satin Fabric",
    materialType: state?.materialType || "COM/Process",
    currentStatus: state?.currentStatus || "On Route",
    shipmentId: state?.shipmentId || "12345678901",
    furnitureType: state?.furnitureType || "Sofa",
    supplier: state?.supplier || "Elite Fabrics",
    arrivalDate: state?.arrivalDate || "05/10/2025",
    batchNumber: state?.batchNumber || "BATCH-2490",
    orderDate: state?.orderDate || "06/15/2025",
  };

  return (
    <div className="space-y-6 pb-10">
      <Header
        navigate={navigate}
        activeTab={activeTab}
        status={status}
        setStatus={setStatus}
        open={open}
        setOpen={setOpen}
        options={options}
        title="Fabric Details"
        showAssignVendor={false}
      />

      <CustomerInfo state={details} activeTab={activeTab} />

      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="w-full sm:w-[245.97px]">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
            alt={details.fabricName}
            className="w-full h-auto sm:h-[254.49px] rounded-[19px] object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[23.38px] w-full lg:w-[441.23px]">
          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Fabric Name
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.fabricName}
            </p>
          </div>

          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Material Type
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.materialType}
            </p>
          </div>

          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Current Status
            </p>
            <p className="text-[#48525B] font-poppins  font-semibold text-[18.66px] mt-2">
              {details.currentStatus}
            </p>
          </div>

          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Shipment ID
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.shipmentId}
            </p>
          </div>

          <div>
            <p className="text-[#A1A5B7] font-poppins font-semibold text-[17.23px]">
              Type of Furniture
            </p>
            <p className="text-[#48525B] font-poppins font-semibold text-[18.66px] mt-2">
              {details.furnitureType}
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default FabricDetails;
