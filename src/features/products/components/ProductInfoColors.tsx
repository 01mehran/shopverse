// Zustand;
import { useUiStore } from "@/stores/useUiStore";
import { useShallow } from "zustand/shallow";

// Motion Component;
import { motion } from "motion/react";

// Types;
import type { props } from "./ProductInfo";

// Icons;
import { Check } from "lucide-react";

export default function ProductInfoColors({ product }: props) {
  const { selectedColors, selectColor } = useUiStore(
    useShallow((state) => ({
      selectedColors: state.selectedColors,
      selectColor: state.selectColor,
    })),
  );

  const selectedColorIndex = selectedColors[+product.id] ?? 0;

  return (
    <>
      <motion.section
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="itms-center flex flex-col gap-2 py-1"
      >
        <p className="text-sm font-normal text-black/60">Select Colors</p>

        <div className="flex items-center gap-3">
          {product.colors.map((color, i) => (
            <article
              key={color}
              style={{ backgroundColor: color }}
              onClick={() => selectColor(+product.id, i)}
              className="flex size-7 cursor-pointer items-center justify-center rounded-full text-white"
            >
              {i === selectedColorIndex && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {" "}
                  <Check size={16} />{" "}
                </motion.span>
              )}
            </article>
          ))}
        </div>
      </motion.section>

      {/* Horizontally Line */}
      <hr className="border border-black/5" />
    </>
  );
}
