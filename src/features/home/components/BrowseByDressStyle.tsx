// Components;
import { Container } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Data;
import { BrowseByDressStyles } from "../data/dressByStyles";

// Animations
import {
  dressStyleContainerVariant,
  dressStyleItemVariant,
  fadeUpVariant,
} from "@/shared/animations";

export default function BrowseByDressStyle() {
  return (
    <Container>
      <section className="bg-bg-muted rounded-2xl px-5 py-8 sm:py-12 lg:px-10">
        <motion.header
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-IntegralCF md:font-Inter pb-6 text-center text-[32px] leading-8 font-bold tracking-tighter sm:pb-10 md:text-[48px] md:font-normal md:tracking-wide"
        >
          BROWSE BY <br className="md:hidden" />{" "}
          <span className="md:lowercase">DRESS</span> STYLE
        </motion.header>

        <motion.main
          variants={dressStyleContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:grid-cols-9"
        >
          {BrowseByDressStyles.map((item) => (
            <motion.article
              variants={dressStyleItemVariant}
              className={`relative ${item.id === 1 || item.id === 4 ? "sm:col-span-3" : "sm:col-span-6"}`}
              key={item.id}
            >
              <img
                src={item.image}
                alt={`a person wearing ${item.name} clothes`}
                loading="lazy"
                className="fit h-47 w-full rounded-2xl md:h-52"
              />
              <span className="absolute top-4 left-4 text-xl font-bold sm:left-6">
                {item.name}
              </span>
            </motion.article>
          ))}
        </motion.main>
      </section>
    </Container>
  );
}
