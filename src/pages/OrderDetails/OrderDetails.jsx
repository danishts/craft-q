import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import CustomerInfo from "./components/CustomerInfo";
import Tabs from "./components/Tabs";
import FurnitureTab from "./components/FurnitureTab";
import OrdersTrack from "./components/OrdersTrack";

function OrderDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [status, setStatus] = useState("Pending");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("furniture");

  const options = ["Pending", "On Route", "Delivered", "Cancelled"];

  return (
    <div>
      <Header
        navigate={navigate}
        activeTab={activeTab}
        status={status}
        setStatus={setStatus}
        open={open}
        setOpen={setOpen}
        options={options}
      />

      <CustomerInfo state={state} activeTab={activeTab} />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-6">
        {activeTab === "furniture" && <FurnitureTab state={state} />}

        {activeTab === "track" && <OrdersTrack />}
      </div>
    </div>
  );
}

export default OrderDetails;
