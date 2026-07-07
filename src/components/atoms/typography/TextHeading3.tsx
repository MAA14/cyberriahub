import React from "react";
import { TypeFontWeights } from "./TypeFonts";

type TextHeading3Props = {
  children: React.ReactNode;
  className?: string;
  weight?: TypeFontWeights;
} & React.ComponentPropsWithRef<"h3">;
const TextHeading3 = ({
  children,
  className,
  weight,
  ...props
}: TextHeading3Props) => {
  return (
    <h3
      className={`font-orbitron max-sm:text-[14px] max-lg:text-[20px] text-[24px] ${weight || "font-normal"} tracking-[6%] ${className}`}
      {...props}
    >
      {children}
    </h3>
  );
};

export default TextHeading3;
