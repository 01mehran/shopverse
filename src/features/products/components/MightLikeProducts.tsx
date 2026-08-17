// Componentsl
import { Container, ProductCard } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
} from "@/shared/animations";

// Static Data;
import { products } from "../data";

export default function MightLikeProducts() {
  return (
    <section>
      <Container>
        <section className="pt-10 sm:pt-16">
          <motion.h1
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-IntegralCF mb-4 text-center text-[32px] leading-7 font-bold sm:text-[48px] md:leading-none"
          >
            YOU MIGHT <br className="xs:hidden" /> ALSO LIKE
          </motion.h1>

          <motion.div
            variants={productCardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hide-scrollbar flex items-baseline justify-between gap-3 overflow-x-auto py-4"
          >
            {products.map((item) => (
              <motion.div key={item.id} variants={productCardVariants}>
                <ProductCard key={item.id} item={item} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </section>
  );
}
