import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="body-font bg-black text-hoverCol">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
          <h1 className="title-font mb-4 text-4xl font-medium text-white sm:text-6xl">
            Before they sold out
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" size="primary">
              Get Started
            </Button>
          </div>
        </div>
        <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className="rounded object-cover object-center"
            alt="hero"
            src="/homeimg.webp"
            width={1200}
            height={1200}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
