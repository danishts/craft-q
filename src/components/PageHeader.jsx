// import React from "react";
// import PageTitle from "./PageTitle";
// import SearchBar from "./SearchBar";

// function PageHeader({ title, onAddClick, searchValue, onSearchChange }) {
//   return (
//     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 w-full">
//       {/* TITLE (ALWAYS VISIBLE) */}
//       <PageTitle title={title} />

//       {/* RIGHT: Add button + SEARCH */}
//       <div className="flex items-center gap-3">
//         <button
//           onClick={onAddClick}
//           className="bg-[#3A2414] text-white px-4 py-2 rounded-md"
//         >
//           Add Quote
//         </button>

//         <div className="w-full sm:w-auto">
//           <SearchBar value={searchValue} onChange={onSearchChange} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PageHeader;

import React from "react";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";

function PageHeader({
  title,
  onAddClick,
  searchValue,
  onSearchChange,
  showAddButton = false,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 w-full">
      {/* TITLE */}
      <PageTitle title={title} />

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">
        {showAddButton && (
          <button
            onClick={onAddClick}
            className="bg-[#3A2414] text-white px-4 py-2 rounded-md"
          >
            Add Quote
          </button>
        )}

        <div className="w-full sm:w-auto">
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;