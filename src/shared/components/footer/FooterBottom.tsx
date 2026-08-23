// Compoennts;
import FooterLogosBox from "./FooterlogosBox";

// Motion Component;
import { motion } from "motion/react";

// Data;
import { footerImages } from "./data/footerPaymentLogos";

export default function FooterBottom() {
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      id="brands"
      className="flex flex-col items-center justify-between space-y-4 pt-8 md:flex-row"
    >
      <p className="text-base text-black/60">
        Shop.co © 2000-2023, All Rights Reserved
      </p>
      <div className="flex items-center gap-3">
        {footerImages.map((images) => (
          <FooterLogosBox
            imageUrl={images.imageUrl}
            key={images.alt}
            alt={images.alt}
            className="shadow-sm"
          />
        ))}
      </div>
    </motion.section>
  );
}
