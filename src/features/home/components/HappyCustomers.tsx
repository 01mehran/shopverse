// React Hooks;
import { useRef } from "react";

// Components;
import { Container } from "@/shared/components";

// Icons;
import { ArrowRight } from "lucide-react";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import { fadeUpVariant } from "@/shared/animations";

// Static Images;
import ratingStar from "@images/home/rating-start.png";

export default function HappyCustomers() {
  const reviewRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    reviewRef.current?.scrollBy({
      // reviewRef.current.clientWidth
      left: 400,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    reviewRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-18">
      <Container>
        <header className="flex items-end justify-between md:items-center">
          <article>
            <motion.h1
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-IntegralCF pr-8 text-[32px] leading-10 font-bold md:text-[48px]"
            >
              OUR HAPPY CUSTOMERS
            </motion.h1>
          </article>

          {/* Arrows */}
          <article className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className={`cursor-pointer transition-all duration-200 hover:-translate-x-px`}
            >
              <ArrowRight size={28} className="rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className={`cursor-pointer transition-all duration-200 hover:translate-x-px`}
            >
              <ArrowRight size={28} />
            </button>
          </article>
        </header>

        {/* Comments */}
        <motion.main
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          ref={reviewRef}
          className="hide-scrollbar bg mt-8 flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-4"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <article
              key={i}
              className="xs:min-w-100 flex h-55 min-w-full snap-start flex-col items-start justify-around rounded-2xl border border-black/10 p-4 shadow-lg md:justify-between md:p-7 lg:min-w-1/3"
            >
              <img src={ratingStar} alt="rating start image" />
              <h1 className="text-xl font-bold">Sarah M.</h1>
              <p className="text-base leading-6 font-normal text-black/60">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </article>
          ))}
        </motion.main>
      </Container>
    </section>
  );
}
