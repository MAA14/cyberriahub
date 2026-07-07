import React from "react";

const FrameNavbar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="312"
      height="51"
      viewBox="0 0 312 51"
      fill="none"
      className="absolute top-0 -translate-y-1 left-1/2 -translate-x-1/2 z-50"
    >
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div
          className="h-full w-full"
          style={{
            backdropFilter: "blur(7.5px)",
            clipPath: "url(#bgblur_0_131_493_clip_path)",
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="15"
        d="M311.125 20.8945L293.916 51H280"
        fill="none"
        className="stroke-4 stroke-blue-light"
      />
      <defs>
        <clipPath id="bgblur_0_132_497_clip_path" transform="translate(0 0)">
          <path d="M311.125 20.8945L293.916 51H280" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FrameNavbar;
