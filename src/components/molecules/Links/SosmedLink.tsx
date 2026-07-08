import FrameHexagon from "@/components/atoms/svg/FrameHexagon";
import IconDiscord from "@/components/atoms/svg/IconDiscord";
import IconTwitter from "@/components/atoms/svg/IconTwitter";
import Link from "next/link";
import React from "react";

type SosmedLinkProps = {
  className?: string;
  url: string;
  icon: "discord" | "twitter";
} & React.ComponentPropsWithRef<"a">;
const SosmedLink = ({ className, url, icon, ...props }: SosmedLinkProps) => {
  const iconClassName = "-mt-3 rotate-180";
  return (
    <Link href={url} target="blank" className={`w-fit h-fit ${className}`}>
      <FrameHexagon className="-scale-80 max-sm:-scale-60">
        {icon == "discord" && <IconDiscord className={iconClassName} />}
        {icon == "twitter" && <IconTwitter className={iconClassName} />}
      </FrameHexagon>
    </Link>
  );
};

export default SosmedLink;
