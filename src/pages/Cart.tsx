// Components;
import CartItem from "@/features/cart/components/CartItem";
import OrderSummary from "@/features/cart/components/OrderSummary";
import { BreadCrumb, Container } from "@/shared/components";
import EmptyState from "@/features/cart/components/EmptyState";
import ClearCartModal from "@/features/cart/components/ClearCartModal";

// React Hooks;
import { useState } from "react";

// Zustand;
import { useCartStore } from "@/stores/cartStore";

// Animations;
import {
  productCardContainerVariants,
  productCardVariants,
} from "@/shared/animations";

// Motion Components;
import { AnimatePresence, motion } from "motion/react";

export default function Cart() {
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <section>
      <BreadCrumb items={[{ label: "Cart" }]} />

      <Container>
        {cartItems.length > 0 && (
          <>
            <header className="xs:flex-row xs:mb-0 mb-8 flex flex-col justify-between sm:items-center">
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

              <div className="relative">
                {/* Clear Cart Button */}
                <motion.button
                  disabled={showClearConfirm}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setShowClearConfirm(true)}
                  className="text-md xs:min-w-44 hover:border-red hover:text-red hover:bg-red/5 ease xs:self-center mt-3 w-full cursor-pointer rounded-xl border border-black/50 px-4 py-1 font-medium transition-colors duration-300 disabled:pointer-events-none disabled:cursor-not-allowed sm:px-8"
                >
                  Clear Cart
                </motion.button>

                {/* Clear Cart Modal */}
                <AnimatePresence>
                  {showClearConfirm && (
                    <ClearCartModal setShowClearConfirm={setShowClearConfirm} />
                  )}
                </AnimatePresence>
              </div>
            </header>

            <motion.main
              variants={productCardContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-4 grid grid-cols-1 items-start gap-4 pb-4 md:grid-cols-12"
            >
              <div className="border-bg-muted divide-bg-muted col-span-7 w-full divide-y-2 rounded-2xl border px-4 sm:px-6">
                <AnimatePresence>
                  {cartItems?.map((cartItem) => (
                    <motion.div
                      key={`${cartItem.id}-${cartItem.colorIndex}-${cartItem.sizeIndex}`}
                      layout
                      variants={productCardVariants}
                      exit={{ opacity: 0, scale: 0 }}
                      className="flex flex-col justify-between gap-8 divide-y divide-black/10 rounded-xl py-3 md:py-5"
                    >
                      <CartItem cartItem={cartItem} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Summary */}
              <OrderSummary />
            </motion.main>
          </>
        )}

        {cartItems.length === 0 && <EmptyState />}
      </Container>
    </section>
  );
}
