import React from "react";

type IconTwitterProps = {} & React.ComponentPropsWithRef<"svg">;
const IconTwitter = ({ ...props }: IconTwitterProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="45"
      viewBox="0 0 50 45"
      fill="none"
      {...props}
    >
      <path
        d="M39.5035 0H47.1676L30.3399 19.0959L50 45H34.5718L22.4925 29.2583L8.66378 45H0.999667L18.8271 24.5756L0 0H15.8114L26.7244 14.3801L39.5035 0ZM36.8211 40.5166H41.0696L13.5788 4.31734H9.01366L36.8211 40.5166Z"
        className="fill-blue-light group-hover:fill-blue-dark transition-colors ease-in"
      />
    </svg>
  );
};

export default IconTwitter;
