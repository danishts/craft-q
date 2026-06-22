// import React from "react";
// import PageHeader from "../components/PageHeader";

// function UpholsteryQuotes() {
//   return (
//     <div>
//       {/* PAGE HEADER (REUSABLE) */}
//       <PageHeader title="Upholstery Quotes" />

//       {/* PAGE CONTENT */}
//       <div className="mt-4">
//         <p>Upholstery Quotes Page Content</p>
//       </div>
//     </div>
//   );
// }

// export default UpholsteryQuotes;import React from "react";

import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Table from "../components/Table/Table";
import AddQuoteForm from "../components/AddQuoteForm";

function UpholsteryQuotes() {
  const initial = [
    {
      client: "Emily R.",
      itemType: "Sofa Cover",
      status: "On Route",
      priority: "Affirmative",
      date: "06/06/2025",
    },
    {
      client: "John M.",
      itemType: "Chair Cover",
      status: "Delivered",
      priority: "High",
      date: "10/06/2025",
    },
  ];

  const [data, setData] = useState(initial);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  function handleAdd(item) {
    setData((d) => [item, ...d]);
  }

  function handleDelete(index) {
    setData((d) => d.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full ">
      <PageHeader
        title="Upholstery Quotes"
        onAddClick={() => setIsOpen(true)}
        searchValue={search}
        onSearchChange={setSearch}
        showAddButton={true}
      />

      <div className="mt-4 md:mt-6 -mx-3 px-6 sm:-mx-4 md:-mx-6 lg:-mx-8">
        <Table data={data} onDelete={handleDelete} searchTerm={search} />
      </div>

      <AddQuoteForm
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default UpholsteryQuotes;