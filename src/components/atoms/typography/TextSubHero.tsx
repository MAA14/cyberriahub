import React from "react";
import { TypeFontWeights } from "./TypeFonts";

type TextSubHeroProps = {
  children: React.ReactNode;
  className?: string;
  weight?: TypeFontWeights;
};
const TextSubHero = ({ children, className, weight }: TextSubHeroProps) => {
  return (
    <h2
      className={`font-orbitron max-sm:text-[18px] text-[32px] ${weight || "font-normal"} tracking-[8%] ${className}`}
    >
      {children}
    </h2>
  );
};

export default TextSubHero;
