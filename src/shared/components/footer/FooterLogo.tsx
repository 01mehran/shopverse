// Components;
import FooterLogosBox from "./FooterlogosBox";

// Motion;
import { motion } from "motion/react";

// Static Data;
import { footerSocialLogos } from "./data/footerSocialLogos";

export default function FooterLogo({ className = "" }) {
  return (
    <motion.article
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className={`mb-8 flex flex-col items-start justify-center gap-6 ${className}`}
    >
      <h1 className="font-IntegralCF text-[25px] font-bold md:text-[32px]">
        SHOP.CO
      </h1>
      <p className="text-sm text-black/60">
        We have clothes that suits your style and <br /> which you’re proud to
        wear. <br /> From women to men.
      </p>
      <div className="flex items-center gap-4">
        {footerSocialLogos.map((logos) => (
          <FooterLogosBox
            alt={logos.alt}
            imageUrl={logos.imageUrl}
            key={logos.alt}
            className="flex aspect-square w-8 items-center justify-center border border-black/15"
            borderRadius="50%"
          />
        ))}
      </div>
    </motion.article>
  );
}
