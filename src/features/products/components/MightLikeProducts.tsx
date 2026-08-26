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
} from "@/shared/animations";

export default function MightLikeProducts() {
  const {
    data: youMightLike = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", "you-might-like"],
    queryFn: () => getProducts("you-might-like"),
  });

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

          {isLoading && <Loading />}

          {error && (
            <div className="text-red grid h-38 w-full place-content-center text-lg font-medium">
              <p>{error.message}</p>
            </div>
          )}

          <motion.div
            variants={productCardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hide-scrollbar flex snap-x snap-mandatory items-baseline justify-between gap-3 overflow-x-auto py-4"
          >
            {youMightLike.map((product) => (
              <motion.div
                key={product.id}
                variants={productCardVariants}
                className="snap-start"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </Container>
    </section>
  );
}
