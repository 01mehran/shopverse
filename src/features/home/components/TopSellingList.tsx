// Components;
import { Container, ProductCard } from "@/shared/components";

// Motion;
import { motion } from "motion/react";

// Static Images;
import pic5 from "@images/home/pic5.png";
import pic6 from "@images/home/pic6.png";
import pic7 from "@images/home/pic7.png";
import pic8 from "@images/home/pic8.png";

// Animations;
import {
  fadeUpVariant,
  productCardContainerVariants,
  productCardVariants,
  fadeLeftVariant,
} from "@/shared/animations";

// Static Data;
const products = [
  {
    id: 1,
    image: pic5,
    name: "Vertical Striped Shirt",
    rating: 4.5,
    price: 29,
  },
  {
    id: 2,
    image: pic6,
    name: "Courage Graphic T-shirt",
    rating: 4.2,
    price: 45,
  },
  {
    id: 3,
    image: pic7,
    name: "Loose Fit Bermuda Shorts",
    rating: 4.8,
    price: 79,
  },
  {
    id: 4,
    image: pic8,
    name: "Faded Skiny Jneas",
    rating: 4.6,
    price: 65,
  },
];

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
          {products.map((item) => (
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
