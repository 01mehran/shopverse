// React Router Dom;
import { useEffect } from "react";

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

// Stores;
import { useNewArrivals } from "@/stores/useNewArrivals";

// Zustand;
import { useShallow } from "zustand/shallow";

// Icons;
import { Loader } from "lucide-react";

export default function NewArrivalsList() {
  const { newArrivals, loading, error, getNewArrivals } = useNewArrivals(
    useShallow((state) => ({
      newArrivals: state.newArrivals,
      loading: state.loading,
      getNewArrivals: state.getNewArrivals,
      error: state.error,
    })),
  );

  useEffect(() => {
    getNewArrivals();
  }, []);

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

        {loading && (
          <div className="grid h-38 w-full place-content-center">
            <Loader size={34} className="animate-spin" />
          </div>
        )}

        {error && (
          <div className="text-red grid h-38 w-full place-content-center text-lg font-medium">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && newArrivals.length > 0 && (
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
