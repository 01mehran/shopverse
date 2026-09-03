// Components;
import CartItem from "@/features/cart/components/CartItem";
import OrderSummary from "@/features/cart/components/OrderSummary";
import { BreadCrumb, Container } from "@/shared/components";
import EmptyState from "@/features/cart/components/EmptyState";

// Animations;
import {
  productCardContainerVariants,
  productCardVariants,
} from "@/shared/animations";

// Zustand;
import { useCartStore } from "@/stores/cartStore";

// Motion Components;
import { motion } from "motion/react";

export default function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <section>
      <BreadCrumb items={[{ label: "Cart" }]} />

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
          {cartItems.length > 0 && (
            <div className="col-span-7 w-full">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={productCardVariants}
                  className="border-bg-muted flex flex-col justify-between gap-8 divide-y divide-black/10 rounded-2xl border p-2.5 md:p-5"
                >
                  <CartItem {...item} />
                </motion.div>
              ))}
            </div>
          )}

          {/* Order Summary */}
          {cartItems.length > 0 && <OrderSummary />}
        </motion.div>

        {cartItems.length === 0 && <EmptyState />}
      </Container>
    </section>
  );
}
