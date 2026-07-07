import "./style.css";
import TextHeading3 from "@/components/atoms/typography/TextHeading3";
import Image from "next/image";
import HomeSlogan from "@/components/organisms/home/HomeSlogan";

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
          className="mb-3"
        />
        <div className="desc-long px-10 flex items-center justify-center">
          <TextHeading3 className="text-white">WELCOME TO</TextHeading3>
        </div>
        <HomeSlogan />
      </div>
    </section>
  );
};

export default Home;
