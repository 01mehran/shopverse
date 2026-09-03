// React Router Dom;
import { Link } from "react-router-dom";

// Stores;
import { useUiStore } from "@/stores/useUiStore";
import { useCartStore } from "@/stores/cartStore";

// Motiom Components;
import { motion, AnimatePresence } from "motion/react";

// Icons;
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

export default function HeaderIcons() {
  const openSearch = useUiStore((state) => state.openSearch);
  const cartItems = useCartStore((state) => state.cartItems);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <section className="flex items-baseline gap-2.5">
      {/* Cart Icon; */}
      <Link
        to={`/cart`}
        onClick={() => {
          scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
      >
        <button className="relative cursor-pointer focus-within:border-0 hover:text-black/80">
          <ShoppingCart strokeWidth={2.5} />

          <AnimatePresence>
            {totalQuantity && (
              // Totalquantity Badge
              <motion.span
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white"
              >
                {totalQuantity}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </Link>

      {/* User Icon */}
      <button className="cursor-pointer focus-within:border-0 hover:text-black/80">
        <CircleUserRound strokeWidth={2.5} />
      </button>

      {/* Search Icon */}
      <button
        onClick={openSearch}
        className="cursor-pointer focus-within:border-0 hover:text-black/80 focus:outline-0 md:hidden"
      >
        <Search strokeWidth={2.5} />
      </button>
    </section>
  );
}
