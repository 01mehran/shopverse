// Animations;
import { productCardVariants } from "@/shared/animations";

// Types;
import type { FooterColumn } from "@/shared/types/types";

// Motion Component;
import { motion } from "motion/react";

export default function FooterColumn({ title, links }: FooterColumn) {
  return (
    <motion.section variants={productCardVariants}>
      <article className="flex flex-col items-start justify-center gap-3">
        <p className="text-lg font-medium uppercase">{title}</p>

        {links.map((link) => (
          <span key={link} className="text-base text-black/60 capitalize">
            {link}
          </span>
        ))}
      </article>
    </motion.section>
  );
}
