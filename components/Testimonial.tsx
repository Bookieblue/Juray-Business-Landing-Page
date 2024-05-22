"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/constants";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="bg-white py-10 lg:py-16 max-container padding-container w-full flexCenter "
    >
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full max-w-4xl"
      >
        {" "}
        <h2 className="bold-32 lg:text-4xl font-extrabold text-gray-500 mb-8 text-center">
          What Our Clients Say
        </h2>
        <CarouselContent>
          {TESTIMONIALS.map((testimonial, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className=" h-[350px]  flexCenter p-6">
                    <div>
                      <Image
                        src={testimonial.image}
                        width={100}
                        height={40}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                      />
                      <p className="regular-16 text-gray-400 mb-4">
                        {testimonial.content}
                      </p>
                      <h3 className="regular-16  text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-800 meduim-16">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Testimonial;
