import React from "react";

type TextBodyProps = {
  children: React.ReactNode;
  className?: string;
};
const TextBody = ({ children, className }: TextBodyProps) => {
  return (
    <h4
      className={`font-albert-sans text-[14px] font-normal tracking-[2%] leading-[140%] ${className}`}
    >
      {children}
    </h4>
  );
};

export default TextBody;
