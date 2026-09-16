// Zustand;
import { useCartStore } from "@/stores/cartStore";

// Motion Components;
import { motion } from "motion/react";

// Types;
type ClearCartModalProps = {
  setShowClearConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ClearCartModal({
  setShowClearConfirm,
}: ClearCartModalProps) {
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <motion.section
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="xs:-left-46 xs:w-90 absolute top-14 left-0 z-20 w-full rounded-2xl bg-black/95 p-4 text-white/80 before:absolute before:-top-1 before:right-5 before:h-2 before:w-2 before:rotate-45 before:bg-black/95"
    >
      <p className="text-center text-base">
        Are you sure you want to clear your cart?
      </p>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          className="text-red/80 hover:shadow-red/40 ease cursor-pointer rounded-md border px-4 text-base shadow-sm transition-all duration-200"
          onClick={() => setShowClearConfirm(false)}
        >
          Cancel
        </button>

        <button
          className="ease cursor-pointer rounded-md border px-4 text-base text-green-400 shadow-sm transition-all duration-200 hover:shadow-green-500"
          onClick={() => {
            clearCart();
            setShowClearConfirm(false);
          }}
        >
          Confirm
        </button>
      </div>
    </motion.section>
  );
}
