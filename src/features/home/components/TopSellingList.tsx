// Components;
import { Container, ProductCard } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Data;
import { topSellingProducts } from "../data/topSelling";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
  fadeLeftVariant,
} from "@/shared/animations";

export default function TopSellingList() {
  return (
    <Container>
      <section className="py-10 sm:py-16">
        <motion.h1
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-IntegralCF mb-2 text-center text-[32px] font-bold sm:text-[48px]"
        >
          TOP SELLING
        </motion.h1>

        <motion.div
          variants={productCardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hide-scrollbar flex items-baseline justify-between gap-3 overflow-x-auto py-4"
        >
          {topSellingProducts.map((item) => (
            <motion.div key={item.id} variants={productCardVariants}>
              <ProductCard key={item.id} item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          variants={fadeLeftVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xs:w-50 mx-auto mt-1 block w-full cursor-pointer rounded-full border border-black/10 py-2 text-base"
        >
          Veiw All
        </motion.button>
      </section>
    </Container>
  );
}
