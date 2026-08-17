// Components;
import { Container } from "@/shared/components";

// Icons;
import { ArrowRight } from "lucide-react";

// Motion Component;
import { motion } from "motion/react";

// Static Images;
import ratingStar from "@images/home/rating-start.png";
import { fadeUpVariant } from "@/shared/animations";

export default function HappyCustomers() {
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
            <ArrowRight size={28} className="rotate-180 cursor-pointer" />
            <ArrowRight size={28} className="cursor-pointer" />
          </article>
        </header>

        {/* Comments */}
        <motion.main
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="hide-scrollbar bg mt-8 flex items-center gap-4 overflow-x-auto px-4"
        >
          {Array.from({ length: 5 }, (_, i) => (
            <article
              key={i}
              className="xs:min-w-100 flex h-55 min-w-full flex-col items-start justify-around rounded-2xl border border-black/10 p-4 md:justify-between md:p-7"
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
