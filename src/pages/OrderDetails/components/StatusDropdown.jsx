import React from "react";

function StatusDropdown({ status, setStatus, open, setOpen, options }) {
  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between gap-2 w-[96px] h-[33px] px-3 bg-[#E8FFF3] rounded-[23px] cursor-pointer"
      >
        <span className="text-[12px] font-medium text-[#50CD89]">{status}</span>

        <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1.5L5 5.5L9 1.5"
            stroke="#50CD89"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {open && (
        <div className="absolute mt-2 w-[96px] bg-white border rounded-lg shadow-md overflow-hidden">
          {options.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                setStatus(item);
                setOpen(false);
              }}
              className="px-2 py-2 text-[12px] text-[#50CD89] hover:bg-[#E8FFF3] cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StatusDropdown;
