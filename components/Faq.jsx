import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { data } from "@/lib/faqData";

const Faq = () => {
  return (
    <div className="bg-black pt-10 text-white">
      <h2 className="mx-auto w-3/4 text-center text-3xl font-extrabold text-white">
        Frequently Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className=" flex flex-col gap-7 bg-black px-7 py-14 text-white  md:px-14"
      >
        {data.map((item, index) => {
          return (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-md  border-2 border-hoverCol px-4 lg:py-2"
            >
              <AccordionTrigger className=" text-left text-[1.375rem] font-medium text-white">
                {`${index + 1}. ${item.question}`}
              </AccordionTrigger>
              <AccordionContent className="text-SubTextCol text-base font-medium lg:w-11/12">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Faq;
