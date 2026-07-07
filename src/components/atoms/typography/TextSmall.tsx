import React from "react";

type TextSmallProps = {
  children: React.ReactNode;
  className?: string;
};
const TextSmall = ({ children, className }: TextSmallProps) => {
  return (
    <h4
      className={`font-albert-sans text-[12px] font-bold tracking-[6%] leading-[140%] ${className}`}
    >
      {children}
    </h4>
  );
};

export default TextSmall;
