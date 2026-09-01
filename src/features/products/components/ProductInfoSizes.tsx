// Zustand;
import { useShallow } from "zustand/shallow";
import { useUiStore } from "@/stores/useUiStore";

// Motion Component;
import { motion } from "motion/react";

// Types;
import type { props } from "./ProductInfo";

export default function ProductInfoSizes({ product }: props) {
  const { selectedSizeIndex, selectSize } = useUiStore(
    useShallow((state) => ({
      selectedSizeIndex: state.selectedSizeIndex,
      selectSize: state.selectSize,
    })),
  );

  return (
    <>
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        viewport={{ once: true }}
        className="itms-center flex flex-col gap-2 py-1 text-sm font-normal text-black/60 md:text-base"
      >
        <p className="text-sm">Choose Size</p>

        <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base">
          {product.sizes.map((size, i) => (
            <button
              key={size}
              onClick={() => selectSize(i)}
              className={` ${i === selectedSizeIndex ? "bg-black text-white" : "bg-bg-muted"} ease w-full max-w-25 cursor-pointer rounded-[62px] px-4 py-2 text-sm transition-all duration-300`}
            >
              {size}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Horizontally Line */}
      <hr className="border border-black/5" />
    </>
  );
}
