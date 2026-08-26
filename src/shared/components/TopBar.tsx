// Motion Component;
import { motion } from "motion/react";

//Icons;
import { X } from "lucide-react";

export default function 






() {
  return (
    <motion.section
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0 }}
      className="relative flex items-center justify-center bg-black py-2 text-xs sm:text-sm"
    >
      <p className="text-xs font-normal text-white md:text-sm">
        Sign up and get 20% off to your first order.
        {/* Sign up */}
        <a href="#" className="ml-1 capitalize underline hover:text-white/90">
          sign up now
        </a>
      </p>

      {/* X Button */}
      <button className="right-20 hidden cursor-pointer text-white hover:text-white/90 lg:absolute lg:block">
        <X size={20} />
      </button>
    </motion.section>
  );
}
