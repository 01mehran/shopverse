// Libraries;
import { useQuery } from "@tanstack/react-query";

// Services;
import { getProducts } from "@/services/products";

// Components;
import { Container } from "@/shared/components";
import ProductCard from "@/shared/components/ProductCard";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
  fadeLeftVariant,
} from "@/shared/animations";

// Icons;
import { Loader } from "lucide-react";

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

        {isLoading && (
          <div className="grid h-38 w-full place-content-center">
            <Loader size={34} className="animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-red grid h-38 w-full place-content-center text-lg font-medium">
            <p>{error.message}</p>
          </div>
        )}

        {!isLoading && !error && newArrivals.length > 0 && (
          <main>
            <motion.div
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="hide-scrollbar flex snap-x snap-mandatory items-baseline justify-between gap-3 overflow-x-auto py-4"
            >
              {newArrivals.slice(0, 4).map((item) => (
                <motion.div
                  key={item.id}
                  variants={productCardVariants}
                  className="snap-start"
                >
                  <ProductCard item={item} />
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
