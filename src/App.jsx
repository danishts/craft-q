// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import UpholsteryQuotes from "./pages/UpholsteryQuotes";
// import PillowOrders from "./pages/PillowOrders";
// import Bookings from "./pages/Bookings";
// import FabricManagement from "./pages/FabricManagement";
// import OrderTracker from "./pages/OrderTracker";
// import MainLayout from "./layout/MainLayout";
// import OrderDetails from "./pages/OrderDetails";
// import OrdersTrack from "./pages/OrdersTrack";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Dashboard />} />
//           <Route path="quotes" element={<UpholsteryQuotes />} />
//           <Route path="pillow-orders" element={<PillowOrders />} />
//           <Route path="bookings" element={<Bookings />} />
//           <Route path="fabric" element={<FabricManagement />} />
//           <Route path="tracker" element={<OrderTracker />} />
//           <Route path="/order-details" element={<OrderDetails />} />
//           <Route path="/order-track" element={<OrdersTrack />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import UpholsteryQuotes from "./pages/UpholsteryQuotes";
import PillowOrders from "./pages/PillowOrders";
import Bookings from "./pages/Bookings";
import FabricManagement from "./pages/FabricManagement";
import OrderTracker from "./pages/OrderTracker";

import MainLayout from "./layout/MainLayout";

import OrdersTrack from "./pages/OrdersTrack";
import OrderDetails from "./pages/OrderDetails/OrderDetails";
import PillowOrderDetails from "./pages/PillowOrderDetails";
import BookingDetails from "./pages/BookingDetails";
import FabricDetails from "./pages/FabricDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="quotes" element={<UpholsteryQuotes />} />
          <Route path="pillow-orders" element={<PillowOrders />} />
          <Route path="pillow-order-details" element={<PillowOrderDetails />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="booking-details" element={<BookingDetails />} />
          <Route path="fabric" element={<FabricManagement />} />
          <Route path="fabric-details" element={<FabricDetails />} />
          <Route path="tracker" element={<OrderTracker />} />

          <Route path="order-details" element={<OrderDetails />} />
          <Route path="order-track" element={<OrdersTrack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;