import TextHeading3 from "@/components/atoms/typography/TextHeading3";
import TextSubHero from "@/components/atoms/typography/TextSubHero";
import Image from "next/image";

const HomeSlogan = () => {
  return (
    <div className="relative max-sm:p-3 p-8 flex flex-col items-center z-10 w-fit max-vsm:gap-2 gap-3">
      <Image
        src="/images/FrameHeroMobile.png"
        alt="Frame Hero"
        width={500}
        height={500}
        className="absolute w-full h-full object-contain -z-1"
        id="FrameHero"
      />
      <TextSubHero className="mt-4 glowing-text" weight="font-black">
        CYBERRIA HUB
      </TextSubHero>
      <div className="gradient-line h-1 w-full"></div>
      <TextHeading3 className="max-sm:mt-0 mt-4 text-center text-white">
        Lost in the Matrix, Found in Cyberria. <br></br>
        The Digital Backyard for Indonesian VTuber.<br></br>
        Est. 2026
      </TextHeading3>
    </div>
  );
};

export default HomeSlogan;
