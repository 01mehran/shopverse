// React Hooks;
import { useState } from "react";

// Zustand;
import { useShallow } from "zustand/shallow";

// Types;
import { useCartStore } from "@/stores/cartStore";
import type { addToCartProps } from "../types/types";

// Motion Components;
import { AnimatePresence, motion } from "motion/react";

// Icons;
import { Minus, Plus } from "lucide-react";

export default function AddToCart({ variant, id }: addToCartProps) {
  const [direction, setDirection] = useState<1 | -1>(1);

  const productInfo = variant === "product-info";

  const { increaseItem, decreaseItem } = useCartStore(
    useShallow((state) => ({
      increaseItem: state.increaseItem,
      decreaseItem: state.decreaseItem,
    })),
  );

  const quantity = useCartStore(
    ({ cartItems }) => cartItems.find((item) => item.id === id)?.quantity ?? 0,
  );

  const handleIncrease = () => {
    setDirection(1);
    increaseItem(id);
  };

  const handleDecrease = () => {
    setDirection(-1);
    decreaseItem(id);
  };

  return (
    <div
      className={`${productInfo ? "col-span-3 px-2 py-2 sm:px-6" : "xs:w-40 w-30 p-1.5 py-2 sm:px-3 lg:w-60"} bg-bg-muted flex items-center justify-between rounded-[62px]`}
    >
      {/* Decrease Button */}
      <button
        disabled={quantity === 0}
        onClick={handleDecrease}
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

      {/* Increase Button */}
      <button onClick={handleIncrease} className="cursor-pointer text-black/80">
        <Plus />
      </button>
    </div>
  );
}
