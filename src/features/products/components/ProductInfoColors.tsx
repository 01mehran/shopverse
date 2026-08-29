// Motion Component;
import { motion } from "motion/react";

// Types;
import type { props } from "./ProductInfo";

// Icons;
import { Check } from "lucide-react";

export default function ProductInfoColors({ product }: props) {
  return (
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
          <span
            key={color}
            style={{ backgroundColor: color }}
            className="flex size-7 cursor-pointer items-center justify-center rounded-full text-white"
          >
            {i === 0 && <Check size={16} />}
          </span>
        ))}
      </div>

      {/* Horizontally Line */}
      {/* <hr className="border border-black/5" /> */}
    </motion.section>
  );
}
