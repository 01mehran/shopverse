// Components;
import Container from "./Container";

// Icons;
import { ArrowRight } from "lucide-react";

// Static Images;
import ratingStar from "@/assets/rating-start.png";

export default function HappyCustomers() {
  return (
    <section className="mt-18">
      <Container>
        <header className="flex items-end justify-between md:items-center">
          <article>
            <h1 className="font-IntegralCF pr-8 text-[28px] leading-8 font-extrabold tracking-[-2px] sm:text-[38px]">
              OUR HAPPY CUSTOMERS
            </h1>
          </article>

          {/* Arrows */}
          <article className="flex items-center gap-4">
            <ArrowRight size={28} className="rotate-180 cursor-pointer" />
            <ArrowRight size={28} className="cursor-pointer" />
          </article>
        </header>
      </Container>

      {/* Comments */}
      <main className="hide-scrollbar mt-8 flex items-center gap-4 overflow-x-auto px-4">
        {Array.from({ length: 5 }, (_, i) => (
          <article
            key={i}
            className="xs:min-w-100 flex h-55 min-w-full flex-col items-start justify-around rounded-2xl border border-black/10 p-4 md:justify-between md:p-7"
          >
            <img src={ratingStar} alt="rating start image" />
            <h1 className="font-Satoshi text-xl font-bold">Sarah M.</h1>
            <p className="font-Satoshi text-base leading-6 font-normal text-black/60">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </article>
        ))}
      </main>
    </section>
  );
}
