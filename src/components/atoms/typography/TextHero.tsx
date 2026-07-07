import React from "react";

type TextHeroProps = {
  children: React.ReactNode;
  className?: string;
};
const TextHero = ({ children, className }: TextHeroProps) => {
  return (
    <h1
      className={`font-orbitron text-[64px] font-black tracking-[10%] ${className}`}
    >
      {children}
    </h1>
  );
};

export default TextHero;
