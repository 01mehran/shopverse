// Components;
import Counter from "./Counter";

// Motion Component;
import { motion } from "motion/react";

export default function Stats() {
  return (
    <motion.section
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.45, duration: 0.6 }}
      viewport={{ once: true }}
      className="xs:justify-around mx-auto mt-8 flex w-full max-w-100 flex-wrap items-baseline justify-center space-y-2 divide-black/10 md:mt-12 md:flex lg:max-w-full lg:divide-x"
    >
      <article className="xs:pr-12 border-r border-r-black/10 pr-4 lg:pr-6">
        <div className="flex items-center gap-px">
          <Counter to={200} />
          <span className="stats-numbers">+</span>
        </div>
        <span className="stats-text">International Brands</span>
      </article>

      <article className="pl-4 lg:pr-5">
        <div className="flex items-center gap-px">
          <Counter to={2000} />
          <span className="stats-numbers">+</span>
        </div>
        <span className="stats-text">High-Quality Products</span>
      </article>

      <article className="lg:pl-5">
        <div className="flex items-center gap-px">
          <Counter to={30000} />
          <span className="stats-numbers">+</span>
        </div>
        <span className="stats-text">Happy Customers</span>
      </article>
    </motion.section>
  );
}
