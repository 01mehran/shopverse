// Components;
import { Container } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Data;
import { logos } from "../data/logos";

export default function BrandLogos() {
  return (
    <motion.section
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-black"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-evenly gap-6 py-6 text-white sm:py-8 md:justify-between">
          {logos.map((logo) => (
            <img
              src={logo.image}
              key={logo.id}
              alt={logo.alt}
              className="w-20 md:w-32"
            />
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
