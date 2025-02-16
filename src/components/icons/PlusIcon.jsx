import * as React from "react";

export const PlusIcon = (props) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FF7E1B"
      fillRule="evenodd"
      d="M12.889 4.889a.889.889 0 0 0-1.778 0v6.222H4.89a.889.889 0 0 0 0 1.778h6.222v6.222a.889.889 0 0 0 1.778 0V12.89h6.222a.889.889 0 0 0 0-1.778H12.89V4.89Z"
      clipRule="evenodd"
    />
  </svg>
  );
};

export default PlusIcon;
