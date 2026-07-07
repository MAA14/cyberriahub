import TextBody from "@/components/atoms/typography/TextBody";
import TextButton from "@/components/atoms/typography/TextButton";
import TextHeading3 from "@/components/atoms/typography/TextHeading3";
import TextHeading4 from "@/components/atoms/typography/TextHeading4";
import TextHero from "@/components/atoms/typography/TextHero";
import TextSmall from "@/components/atoms/typography/TextSmall";
import TextSubHero from "@/components/atoms/typography/TextSubHero";

const Test = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center">
      <TextHero>CYBERRIA HUB</TextHero>
      <TextSubHero>LOST IN MATRIX FOUND IN CYBERRIA</TextSubHero>
      <TextHeading3>Heading 3</TextHeading3>
      <TextHeading4>Heading 4</TextHeading4>
      <TextBody className="max-w-[600px] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </TextBody>
      <TextSmall>
        Small Text for Category, Date, etc need more explanation
      </TextSmall>
      <TextButton>Button</TextButton>
    </section>
  );
};

export default Test;
