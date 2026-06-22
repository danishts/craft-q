import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BookingsTable from "../components/BookingsTable";

const bookingsData = [
  {
    id: 1,
    customer: "Emily R.",
    bookingType: "Consultation",
    datetime: "05/05 - 05:45 PM",
    duration: "45 mins",
    location: "Studio A, 2nd Floor",
    notes: "Discuss fabric selection and pickup schedule.",
  },
  {
    id: 2,
    customer: "Mariam S.",
    bookingType: "Pickup",
    datetime: "05/06 - 10:30 AM",
    duration: "20 mins",
    location: "Main Workshop",
    notes: "Collect finished sofa cushions.",
  },
  {
    id: 3,
    customer: "Ali K.",
    bookingType: "Consultation",
    datetime: "05/07 - 12:00 PM",
    duration: "30 mins",
    location: "Client Office",
    notes: "Finalize upholstery details and delivery timeline.",
  },
];

function Bookings() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleRowClick = (booking) => {
    navigate("/booking-details", { state: { booking } });
  };

  const filteredBookings = bookingsData.filter((item) => {
    if (!searchTerm) return true;
    const query = searchTerm.toLowerCase();
    return (
      item.customer.toLowerCase().includes(query) ||
      item.bookingType.toLowerCase().includes(query) ||
      item.datetime.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.notes.toLowerCase().includes(query)
    );
  });

  return (
    <div>
      <PageHeader
        title="Bookings"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <div className="mt-4">
        <BookingsTable data={filteredBookings} onRowClick={handleRowClick} />
      </div>
    </div>
  );
}

export default Bookings;
