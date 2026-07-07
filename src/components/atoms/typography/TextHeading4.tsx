import React from "react";

type TextHeading4Props = {
  children: React.ReactNode;
  className?: string;
};
const TextHeading4 = ({ children, className }: TextHeading4Props) => {
  return (
    <h4
      className={`font-albert-sans text-[20px] font-semibold tracking-[0%] ${className}`}
    >
      {children}
    </h4>
  );
};

export default TextHeading4;
