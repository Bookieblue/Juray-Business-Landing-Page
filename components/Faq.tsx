import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

const Faq = () => {
  return (
    <section
      id="faq"
      className="mt-10 lg:mt-20 bg-slate-50 w-full max-container padding-container pb-20"
    >
      <div className="flexCenter flex-col pt-20 text-center w-full">
        <h6 className="bold-32 text-center lg:bold-40 text-gray-500">
          OUR FAQs
        </h6>
        <h3>Frequently Asked Questions</h3>
        <p className="text-gray-500">
          We&apos;re here to help, everything you need to know.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:mt-10 w-full">
        <div className="w-full mt-10">
          <Accordion type="single" collapsible className="w-full lg:w-[80%]">
            {FAQS.map((faq, index) => (
              <AccordionItem value={faq.answer} key={faq.question}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Image src="/faq.png" alt="logo" width={600} height={200}  className="md:w-[40%]"/>
      </div>
    </section>
  );
};

export default Faq;
