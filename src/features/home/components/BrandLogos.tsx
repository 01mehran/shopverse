// Components;
import { Container } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Logos
import calvinKlein from "@images/home/brand-logos/calvin-klein-logo.svg";
import gucci from "@images/home/brand-logos/gucci-logo.svg";
import prada from "@images/home/brand-logos/prada-logo.svg";
import versace from "@images/home/brand-logos/versace-logo.svg";
import zara from "@images/home/brand-logos/zara-logo.svg";

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
        <div className="flex flex-wrap items-center justify-evenly gap-6 py-6 sm:py-8 md:justify-between">
          <img src={versace} alt="versace logo" className="w-20 md:w-32" />
          <img src={zara} alt=" zara logo" className="w-16 md:w-24" />
          <img src={gucci} alt=" gucci logo" className="w-20 md:w-32" />
          <img src={prada} alt="prada logo" className="w-20 md:w-32" />
          <img
            src={calvinKlein}
            alt="calvin Klein logo"
            className="w-20 md:w-32"
          />
        </div>
      </Container>
    </motion.section>
  );
}
