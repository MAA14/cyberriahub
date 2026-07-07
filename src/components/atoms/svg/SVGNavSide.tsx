import React from "react";
type SVGNavSideProps = {
  className?: string;
  position: "left" | "right";
};
const SVGNavSide = ({ className, position }: SVGNavSideProps) => {
  const pathD = {
    left: {
      border: "M0 0 L0 20 L23 51 H33",
      fill: "M0 0 L0 20 L23 51 H33 V0",
    },
    right: {
      border: "M33 0 L33 20 L10 51 H0",
      fill: "M33 0 L33 20 L10 51 H0 V0",
    },
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="51"
      viewBox="0 0 33 51"
      fill="none"
      className={`${className}`}
    >
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          className="absolute top-0 left-0 h-full w-full bg-blue-dark-150 effect-glassmorphism"
          style={{ clipPath: `url(#BackgroundBlur${position})` }}
        ></div>
      </foreignObject>
      <path
        d={pathD[position].border}
        fill="none"
        className="stroke-4 stroke-blue-light"
      />
      <defs>
        <clipPath id={"BackgroundBlur" + position} transform="translate(0 0)">
          <path d={pathD[position].fill} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGNavSide;
