// Components;
import { Container } from "@/shared/components";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  dressStyleContainerVariant,
  dressStyleItemVariant,
} from "@/shared/animations";

// Static Images
import ratingStar from "@/assets/images/home/rating-start.png";

// Icons;
import { Check, Minus, Plus } from "lucide-react";

// Types;
import type { Product } from "@/shared/types/types";
type props = {
  product: Product;
};

export default function ProductInfo({ product }: props) {
  if (!product) return null;

  return (
    <section>
      <Container>
        <main className="grid grid-cols-1 md:gap-8 space-y-4 lg:grid-cols-3 lg:space-y-0">
          {/* Product Images */}
          <section className="col-span-1 mx-auto grid max-w-125 gap-3 lg:mx-0 lg:h-100">
            {/* Main Image */}
            <motion.div
              variants={dressStyleContainerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="h-100 overflow-hidden rounded-2xl lg:order-2 lg:h-full"
            >
              <motion.img
                variants={dressStyleItemVariant}
                src={product.image}
                alt="clothes"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </section>

          {/* Product Info */}
          <section className="col-span-2 flex flex-col justify-between gap-2">
            {/* Name */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h1
                initial={{ y: 40, opacity: 0, rotate: 10 }}
                whileInView={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="font-IntegralCF gap-2 pb-2 text-[24px] leading-7 font-bold uppercase lg:pb-4 lg:text-[35px]"
              >
                {product.name}
              </motion.h1>
              <img
                src={ratingStar}
                alt="rating star image"
                className="w-40 object-cover"
              />
              <div className="flex items-center gap-4 text-[32px] font-bold">
                <span>{product.price}</span>
                <span className="text-black/30 line-through">$360</span>
                <span className="text-red bg-red/10 rounded-2xl px-2 py-1 text-sm">
                  -40%
                </span>
              </div>
              <span className="text-base font-normal text-black/60">
                {product.description}
              </span>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Colors */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="itms-center flex flex-col gap-2 py-1"
            >
              <p className="text-sm font-normal text-black/60">Select Colors</p>
              <div className="flex items-center gap-3">
                {product.colors.map((color, i) => (
                  <span
                  key={color}
                    style={{ backgroundColor: color }}
                    className="flex size-7 cursor-pointer items-center justify-center rounded-full text-white"
                  >
                    {i === 0 && <Check size={16} />}
                  </span>
                ))}
              </div>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Sizes */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              viewport={{ once: true }}
              className="itms-center flex flex-col gap-2 py-1 text-sm font-normal text-black/60 md:text-base"
            >
              <p className="text-sm">Choose Size</p>
              <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base">
                {product.sizes.map((size) => (
                  <button key={size} className="bg-bg-muted w-full max-w-25 cursor-pointer rounded-[62px] px-4 py-2 text-sm">
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>
            <hr className="border border-black/5" />

            {/* Add To Cart */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-9 items-center gap-2 pt-2"
            >
              {/* Amount Product */}
              <div className="bg-bg-muted col-span-3 flex items-center justify-between rounded-[62px] px-2 py-2 sm:px-6">
                <button className="cursor-pointer text-black/80">
                  <Plus />
                </button>
                <span>1</span>
                <button className="cursor-pointer text-black/80">
                  <Minus />
                </button>
              </div>

              <button className="col-span-6 cursor-pointer rounded-[62px] bg-black px-6 py-2 text-white">
                Add to Cart
              </button>
            </motion.div>
          </section>
        </main>
      </Container>
    </section>
  );
}
