// React Hooks;
import { useState } from "react";

// Types;
import type { addToCartProps } from "../types/types";

// Motion Components;
import { AnimatePresence, motion } from "motion/react";

// Zustand;
import { useUiStore } from "@/stores/useUiStore";
import { useShallow } from "zustand/shallow";
import { useCartStore } from "@/stores/cartStore";

// Icons;
import { Minus, Plus } from "lucide-react";

export default function AddToCart({
  variant,
  productId,
  cartItem,
}: addToCartProps) {
  const [direction, setDirection] = useState<1 | -1>(1);
  const productInfo = variant === "product-info";

  const { selectedQuantities, setQuantity } = useUiStore(
    useShallow((state) => ({
      selectedQuantities: state.selectedQuantities,
      setQuantity: state.setQuantity,
    })),
  );

  const updateCartItemQuantity = useCartStore(
    (state) => state.updateCartItemQuantity,
  );

  const quantity =
    variant === "cart-item" && cartItem
      ? cartItem.quantity
      : (selectedQuantities[productId!] ?? 0);

  const handeIncrease = () => {
    setDirection(1);

    if (variant === "product-info") {
      setQuantity(productId!, quantity + 1);
      return;
    }

    if (variant === "cart-item" && cartItem) {
      updateCartItemQuantity({
        ...cartItem,
        quantity: cartItem.quantity + 1,
      });
    }
  };

  const handeDecrease = () => {
    setDirection(-1);

    if (variant === "product-info") {
      setQuantity(productId!, Math.max(0, quantity - 1));
      return;
    }

    if (variant === "cart-item" && cartItem) {
      updateCartItemQuantity({
        ...cartItem,
        quantity: Math.max(0, quantity - 1),
      });
    }
  };

  return (
    <div
      className={`${productInfo ? "col-span-3 px-2 py-2 sm:px-6" : "xs:w-40 w-30 p-1.5 py-2 sm:px-3 lg:w-60"} bg-bg-muted flex items-center justify-between rounded-[62px]`}
    >
      {/* Decrease Button */}
      <button
        disabled={quantity === 0}
        onClick={handeDecrease}
        className="ease cursor-pointer text-black/80 transition-colors duration-200 disabled:cursor-not-allowed disabled:text-black/50"
      >
        <Minus />
      </button>

      {/* Item Quantity */}
      <div className="relative h-5 w-5 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={quantity}
            initial={{
              y: direction * 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: direction * -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="absolute inset-0 flex items-center justify-center font-medium"
          >
            {quantity}
          </motion.span>
        </AnimatePresence>
      </div>

      {/*  Button Increase*/}
      <button onClick={handeIncrease} className="cursor-pointer text-black/80">
        <Plus />
      </button>
    </div>
  );
}
