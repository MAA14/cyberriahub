import React from "react";

type TextButtonProps = {
  children: React.ReactNode;
  className?: string;
};
const TextButton = ({ children, className }: TextButtonProps) => {
  return (
    <h4
      className={`font-orbitron text-[16px] font-normal tracking-[8%] leading-[140%] ${className}`}
    >
      {children}
    </h4>
  );
};

export default TextButton;
