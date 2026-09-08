// Zustand;
import { useCartStore } from "@/stores/cartStore";
import { useShallow } from "zustand/shallow";

// Components;
import { AddToCart, Container, Star } from "@/shared/components";
import ProductInfoColors from "./ProductInfoColors";
import ProductInfoSizes from "./ProductInfoSizes";
import ProductInfoImage from "./ProductInfoImage";

// Motion Component;
import { motion } from "motion/react";

// Types;
import type { Product } from "@/shared/types/types";

export type props = {
  product: Product;
};

export default function ProductInfo({ product }: props) {
  if (!product) return null;

  const { addItem, cartItems } = useCartStore(
    useShallow((state) => ({
      addItem: state.addItem,
      cartItems: state.cartItems,
    })),
  );

  const isInCart = cartItems.some((item) => item.id === +product.id);

  return (
    <section>
      <Container>
        <main className="grid grid-cols-1 space-y-4 md:gap-8 lg:grid-cols-3 lg:space-y-0">
          {/* Product Images */}
          <ProductInfoImage product={product} />

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

              <div className="flex items-center gap-3">
                {/* Rating Stars */}
                <span className="flex items-center space-x-px">
                  {[1, 2, 3, 4, 5].map((rate) => {
                    if (product.rating >= rate) {
                      return <Star key={rate} />;
                    }

                    if (product.rating >= rate - 0.5) {
                      return <Star key={rate} half />;
                    }

                    return null;
                  })}
                </span>

                {/* Rate */}
                <span className="sm:text-md text-sm font-semibold">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              {/* Off */}
              <div className="flex items-center gap-4 text-[32px] font-bold">
                <span>{product.price}</span>
                <span className="text-black/30 line-through">$360</span>
                <span className="text-red bg-red/10 rounded-2xl px-2 py-1 text-sm">
                  -40%
                </span>
              </div>

              {/* Description */}
              <span className="text-base font-normal text-black/60">
                {product.description}
              </span>
            </motion.div>
            {/* Horizontally Line */}
            <hr className="border border-black/5" />

            {/* Colors */}
            <ProductInfoColors product={product} />

            {/* Sizes */}
            <ProductInfoSizes product={product} />

            {/* Add To Cart */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-9 items-center gap-2 pt-2"
            >
              <AddToCart id={+product.id} variant="product-info" />

              <button
                disabled={isInCart}
                onClick={() => addItem(+product.id)}
                className={`${isInCart ? "pointer-events-none bg-black/60" : "bg-black"} ease col-span-6 cursor-pointer rounded-[62px] px-6 py-2 text-white transition-colors duration-300`}
              >
                Add to Cart
              </button>
            </motion.div>
          </section>
        </main>
      </Container>
    </section>
  );
}
