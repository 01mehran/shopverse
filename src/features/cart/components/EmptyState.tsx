// React Router Dom;
import { Link } from "react-router-dom";

// Motion Components;
import { motion } from "motion/react";

export default function EmptyState() {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center py-18 text-center text-sm text-black/50"
    >
      <article className="flex flex-col -space-y-1">
        <p className="font-IntegralCF text-sm md:text-lg">
          Your cart is empty.
        </p>
        <p className="font-IntegralCF text-sm md:text-lg">
          Add some products to your cart
        </p>
      </article>

      <nav className="mt-2 flex items-center gap-2">
        <Link
          to="/#new-arrivals"
          className="font-semibold underline underline-offset-2"
        >
          New Arrivals
        </Link>
        <Link
          to="/#top-selling"
          className="font-semibold underline underline-offset-2"
        >
          Top Selling
        </Link>
      </nav>
    </motion.section>
  );
}
