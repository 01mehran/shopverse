// Motion Components;
import { motion } from "motion/react";
// Animations;

import {
  dressStyleContainerVariant,
  dressStyleItemVariant,
} from "@/shared/animations";

// Types;
import type { props } from "./ProductInfo";

export default function ProductInfoImage({ product }: props) {
  return (
    <section className="col-span-1 mx-auto grid max-w-125 gap-3 lg:mx-0 lg:h-100">
      {/* Main Image */}
      <motion.div
        variants={dressStyleContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="h-100 overflow-hidden rounded-2xl lg:order-2 lg:h-full"
      >
        <motion.img
          variants={dressStyleItemVariant}
          src={product.image}
          alt="clothes"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
