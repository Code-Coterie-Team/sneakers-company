import * as React from "react";

export const HalfMoonIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.944 2.47a.75.75 0 0 1 .748-.188c4.084 1.238 7.058 5.031 7.058 9.521 0 5.494-4.453 9.947-9.947 9.947-4.49 0-8.283-2.974-9.52-7.058a.75.75 0 0 1 .935-.935 8.447 8.447 0 0 0 10.54-10.54.75.75 0 0 1 .186-.747Zm1.568 1.742c.07.476.107.964.107 1.46 0 5.493-4.454 9.947-9.947 9.947-.496 0-.984-.037-1.46-.107a8.447 8.447 0 1 0 11.3-11.3Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default HalfMoonIcon;
