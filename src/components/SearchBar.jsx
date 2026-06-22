import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar({ value = "", onChange = () => {} }) {
  return (
    <div className="flex items-center w-[308px] h-[44px] gap-[12px] px-3 border border-gray-200 rounded-md">
      {/* ICON + INPUT WRAP */}
      <div className="flex items-center gap-[10px] w-full">
        {/* ICON */}
        <FiSearch size={15} className="text-[#7E8299]" />

        {/* INPUT */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search quotes"
          className="w-full outline-none text-[12px] font-[Poppins] font-medium text-[#A1A5B7]"
        />
      </div>
    </div>
  );
}

export default SearchBar;
