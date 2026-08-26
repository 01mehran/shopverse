// Libraries;
import { useQuery } from "@tanstack/react-query";

// Services;
import { getProducts } from "@/services/products";

// Components;
import { Container, Loading, ProductCard } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
  fadeLeftVariant,
} from "@/shared/animations";
import ErrorMessage from "@/shared/components/ErrorMessage";

export default function TopSellingList() {
  const {
    data: topSelling = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products, top-selling"],
    queryFn: () => getProducts("top-selling"),
  });

  return (
    <Container>
      <section id="top-selling" className="py-10 sm:py-16">
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

        {isLoading && <Loading />}

        {error && <ErrorMessage error={error} />}

        {!isLoading && !error && topSelling.length > 0 && (
          <main>
            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hide-scrollbar flex snap-x snap-mandatory items-baseline justify-between gap-3 overflow-x-auto py-4"
            >
              {topSelling.slice(0, 4).map((product) => (
                <motion.div
                  key={product.id}
                  variants={productCardVariants}
                  className="snap-start"
                >
                  <ProductCard product={product} />
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
          </main>
        )}
      </section>
    </Container>
  );
}
