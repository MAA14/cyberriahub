import Link from "next/link";
import React from "react";

type FrameHexagonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithRef<"div">;
const FrameHexagon = ({ children, className, ...props }: FrameHexagonProps) => (
  <div
    className={"cursor-pointer group relative w-fit aspect-square " + className}
    {...props}
  >
    <div
      className={`absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square h-auto`}
    >
      {children}
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={120}
      height={104}
      fill="none"
    >
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          className="absolute top-0 left-0 h-full w-full group-hover:bg-blue-light bg-blue-dark-150 effect-glassmorphism transition-colors ease-in"
          style={{ clipPath: "url(#BackgroundBlur)" }}
        ></div>
      </foreignObject>
      <path
        stroke="#8DD1E3"
        strokeWidth={4}
        d="m88.27 2 .578 1.004 27.5 47.85.572.995-.572.997-27.5 47.849-.577 1.004H30.956l-.577-1.004-27.5-47.849-.572-.997.572-.996 27.5-47.85L30.956 2h57.315Z"
      />
      <path
        fill="url(#a)"
        fillOpacity={0.25}
        d="M35.804 10.414h47.618l23.814 41.435-23.814 41.436H35.804L11.99 51.849l23.814-41.435Z"
      />
      <path
        stroke="#8DD1E3"
        strokeWidth={2}
        d="M35.804 10.414h47.618l23.814 41.435-23.814 41.436H35.804L11.99 51.849l23.814-41.435Z"
      />
      <defs>
        <pattern
          id="a"
          width={1}
          height={1}
          patternTransform="rotate(-90 52.56 44.41) scale(34.77)"
          patternUnits="userSpaceOnUse"
          preserveAspectRatio="none"
          viewBox="-14.142 -14.142 183 183"
        >
          <use xlinkHref="#b" transform="translate(-183 -183)" />
          <use xlinkHref="#b" transform="translate(0 -183)" />
          <use xlinkHref="#b" transform="translate(-183)" />
          <path
            id="b"
            stroke="#8DD1E3"
            strokeWidth={20}
            d="m-7.071 175.929 183-183"
          />
        </pattern>
        <clipPath id="BackgroundBlur">
          <path d="M35.804 10.414h47.618l23.814 41.435-23.814 41.436H35.804L11.99 51.849l23.814-41.435Z" />
        </clipPath>
      </defs>
    </svg>
  </div>
);
export default FrameHexagon;
