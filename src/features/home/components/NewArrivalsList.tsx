// Libraries;
import { useQuery } from "@tanstack/react-query";

// Services;
import { getProducts } from "@/services/products";

// Components;
import { Container, ErrorMessage, ProductCard } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
  fadeLeftVariant,
} from "@/shared/animations";
import ProductCardSkelton from "@/shared/components/ProductCardSkelton";

export default function NewArrivalsList() {
  const {
    data: newArrivals = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", "new-arrivals"],
    queryFn: () => getProducts("new-arrivals"),
  });

  return (
    <Container>
      <section id="new-arrivals" className="py-10 sm:py-16">
        <motion.h1
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-IntegralCF mb-2 text-center text-[32px] font-bold sm:text-[48px]"
        >
          NEW ARRIVALS
        </motion.h1>

        {error && <ErrorMessage error={error} />}

        {isLoading ? (
          <ProductCardSkelton />
        ) : (
          <main>
            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hide-scrollbar flex snap-x snap-mandatory items-baseline justify-between gap-3 overflow-x-auto py-4"
            >
              {newArrivals.slice(0, 4).map((product) => (
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
      <hr className="border border-black/5" />
    </Container>
  );
}
