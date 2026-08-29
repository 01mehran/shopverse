// Components;
import Counter from "./Counter";

// Data;
import { statsList } from "../data/stats";

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
      {statsList.map((stat, i) => (
        <article key={i} className={stat.styles}>
          <div className="flex items-center gap-px">
            <Counter to={stat.members} />
            <span className="stats-numbers">+</span>
          </div>
          <span className="stats-text">{stat.title}</span>
        </article>
      ))}
    </motion.section>
  );
}
