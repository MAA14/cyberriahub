import "./style.css";
import TextHeading3 from "@/components/atoms/typography/TextHeading3";
import Image from "next/image";
import HomeSlogan from "@/components/organisms/home/HomeSlogan";
import SosmedLink from "@/components/molecules/Links/SosmedLink";

const Home = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="background-sparkle"></div>
      <div
        id="HeroSection"
        className="flex flex-col items-center justify-center gap-2"
      >
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="mb-3 relative z-1"
        />
        <div className="desc-long px-10 flex items-center justify-center">
          <TextHeading3 className="text-white">WELCOME TO</TextHeading3>
        </div>
        <HomeSlogan />
        <div className="flex w-full items-center justify-between mt-5 max-sm:mt-0">
          <SosmedLink icon="discord" url="/discord" />
          <SosmedLink icon="twitter" url="https://x.com/cyberriahub" />
        </div>
      </div>
    </section>
  );
};

export default Home;
