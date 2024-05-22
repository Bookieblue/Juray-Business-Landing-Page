import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative max-container padding-container lg:mt-16 w-full py-10 lg:py-32 flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
      <Image
        src="/background.png"
        alt="background"
        width={300}
        height={100}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
        <h1 className="bold-40 lg:text-5xl font-extrabold mt-24 lg:mt-0 text-white sm:text-6xl animate-fade-in-down">
          Transform Your Business
        </h1>
        <p className="mt-4 text-lg text-gray-300 sm:text-xl animate-fade-in-up">
          Our platform provides cutting-edge tools and technologies designed to
          boost productivity, streamline processes, and drive growth. Whether
          you&apos;re a small startup or a large enterprise, our solutions are
          tailored to meet your unique needs.
        </p>
        <div className="mt-8 animate-fade-in-up mb-8">
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
