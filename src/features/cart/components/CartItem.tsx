// Components;
import { AddToCart, Container } from "@/shared/components";
import OrderSummary from "./OrderSummary";

// Motion Component;
import { motion } from "motion/react";

// Animations;
import {
  productCardContainerVariants,
  productCardVariants,
} from "@/shared/animations";

// icons;
import { Trash2 } from "lucide-react";

// Static Images;
import pic1 from "@/features/cart/assets/pic13.png";

export default function CartItem() {
  return (
    <section>
      <Container>
        {/* Title */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-IntegralCF text-[32px] font-bold uppercase sm:text-[40px]"
        >
          your cart
        </motion.h1>

        <motion.div
          variants={productCardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}

          className="mt-4 grid grid-cols-1 items-start gap-4 pb-4 md:grid-cols-12"
        >
          <motion.article
            variants={productCardVariants}
            className="border-bg-muted col-span-7 flex flex-col justify-between gap-8 divide-y divide-black/10 rounded-2xl border p-2.5 md:p-5"
          >
            {/* Product Cart */}
            <div className="relative flex w-full gap-2 md:gap-4">
              {/* Product Image */}
              <img
                src={pic1}
                alt="clothes"
                className="w-24 rounded-lg object-cover md:w-31"
              />

              {/* Product Info */}
              <div className="flex w-full flex-col justify-between">
                <div className="flex flex-col gap-px">
                  <p className="text-base font-bold sm:text-xl">
                    Gradient Graphic T-shirt
                  </p>
                  <p className="text-sm font-normal">
                    Size: <span className="text-black/60">Large</span>
                  </p>
                  <p className="text-sm font-normal">
                    Color: <span className="text-black/60">White</span>
                  </p>
                </div>

                {/* AddToCart */}
                <div className="flex w-full justify-between">
                  <p className="text-[24px] font-bold">$145</p>
                  <AddToCart variant="cart-item" />
                </div>
              </div>

              {/* Trash Icon */}
              <button className="text-red absolute top-0 right-0 cursor-pointer rounded-full bg-white">
                <Trash2 size={20} strokeWidth={3} />
              </button>
            </div>
          </motion.article>

          {/* Order Summary */}
          <OrderSummary />
        </motion.div>
      </Container>
    </section>
  );
}
