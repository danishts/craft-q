// import React from "react";

// function PageTitle({ title }) {
//   return (
//     <h1
//       className="font-[DM_Sans] font-semibold text-[24px] leading-[100%] text-[#020617]"
//       style={{
//         width: "217px",
//         height: "31px",
//       }}
//     >
//       {title}
//     </h1>
//   );
// }

// export default PageTitle;

// import React from "react";

// function PageTitle({ title }) {
//   return (
//     <h1
//       className="
//         font-[DM_Sans] font-semibold
//         text-[#020617]
//         text-[18px] sm:text-[20px] md:text-[24px]
//         leading-none
//         w-auto md:w-[217px]
//         h-auto md:h-[31px]
//       "
//     >
//       {title}
//     </h1>
//   );
// }

// export default PageTitle;

import React from "react";

function PageTitle({ title }) {
  return (
    <h1
      className="
        font-[DM_Sans] font-semibold
        text-[24px]
        text-[#020617]
        leading-none
        whitespace-nowrap
      "
    >
      {title}
    </h1>
  );
}

export default PageTitle;