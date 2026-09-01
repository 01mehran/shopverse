// Icons;
import { ArrowRight } from "lucide-react";

// Motion Component;
import { motion } from "motion/react";

export default function OrderSummary() {
  return (
    <article className="border-bg-muted col-span-5 rounded-2xl border p-2.5 md:p-5">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between gap-2"
      >
        {/* Title */}
        <h2 className="text-[20px] font-bold md:text-xl">Order Summary</h2>

        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-black/60 md:text-lg">
            Subtotal
          </span>
          <span className="text-base font-bold md:text-lg">$565</span>
        </div>

        {/* Discount */}
        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-black/60 md:text-lg">
            Discount (-20%)
          </span>
          <span className="text-red text-base font-bold md:text-lg">$-113</span>
        </div>
        
        {/* Delivery Fee */}
        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-black/60 md:text-lg">
            Delivery Fee{" "}
          </span>
          <span className="text-base font-bold md:text-lg">$15</span>
        </div>

        {/* Total */}
        <hr className="border border-black/5" />
        <div className="flex items-center justify-between">
          <span className="text-base font-normal text-black/80 md:text-lg">
            Total{" "}
          </span>
          <span className="text-base font-bold md:text-xl">$515</span>
        </div>

        {/* Form */}
        <form className="grid grid-cols-9 gap-3">
          <input
            placeholder="Add promo code"
            className="bg-bg-muted col-span-6 rounded-[62px] px-5 py-1.5 placeholder:text-sm"
          />
          <button className="col-span-3 cursor-pointer rounded-[62px] bg-black text-sm text-white lg:text-base">
            Apply
          </button>
        </form>

        <button className="mt-2 flex w-full cursor-pointer items-center justify-center rounded-[62px] bg-black py-2 text-center text-white">
          Go to Checkout{" "}
          <span className="ml-3">
            <ArrowRight size={20} />
          </span>
        </button>
      </motion.div>
    </article>
  );
}
