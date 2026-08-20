// Motion Component;
import { motion } from "motion/react";

//Static Images;
import laptapHeroImage from "@images/home/laptap-hero-imagee.png";
import mobileHeroImage from "@images/home/mobile-hero-image.png";
import smallStar from "@images/home/small-star.png";
import bigStar from "@images/home/big-star.png";

export default function HeroImages() {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0, rotate: 5 }}
      whileInView={{ y: 0, opacity: 1, rotate: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-112 md:h-120"
    >
      {/* Laptap Hero Image */}
      <img
        src={laptapHeroImage}
        alt="Fashion models wearing modern clothes"
        className="hidden h-full w-full object-bottom-right md:block"
        loading="lazy"
      />

      {/* Mobile Hero Image*/}
      <img
        src={mobileHeroImage}
        alt="Fashion models wearing modern clothes"
        className="h-full w-full object-contain md:hidden"
        loading="lazy"
      />

      {/* Small Star */}
      <motion.img
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 6,
        }}
        src={smallStar}
        alt="small vector around hero image"
        className="absolute top-38 left-4"
        loading="lazy"
      />

      {/* Big Star */}
      <motion.img
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 6,
          delay: 1.5,
        }}
        src={bigStar}
        alt="big vector around hero image"
        className="absolute top-8 right-4 w-16 md:right-4 lg:w-20"
        loading="lazy"
      />
    </motion.section>
  );
}
