import * as React from "react";

export const ShapeDuck = ({ color = "#FFAA50", ...props }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 20 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.8877 1.9519C10.7865 -0.779929 15.3124 -0.624032 18.0186 2.29272V2.30249L16.3213 3.90308C20.2301 8.39371 19.9149 15.2374 15.5625 19.3455C11.1229 23.5456 4.15086 23.303 0 18.821L7.31445 11.9128C4.85564 8.98147 5.08512 4.60211 7.8877 1.9519Z"
      fill={color}
    />
  </svg>
);
