// React Router Dom;
import { Link } from "react-router-dom";

// React Hooks;
import { useEffect, useRef, useState } from "react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";
import { useCartStore } from "@/stores/cartStore";

// Motiom Components;
import { motion, AnimatePresence } from "motion/react";

// Icons;
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

export default function HeaderIcons() {
  const [direction, setDirection] = useState(1);

  const openSearch = useUiStore((state) => state.openSearch);
  const cartItems = useCartStore((state) => state.cartItems);

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const previousQuantity = useRef(totalQuantity);

  useEffect(() => {
    setDirection(totalQuantity > previousQuantity.current ? 1 : -1);
    previousQuantity.current = totalQuantity;
  }, [totalQuantity]);

  return (
    <section className="flex items-baseline gap-2.5">
      {/* Cart Icon; */}
      <Link
        to={`/cart`}
        onClick={() => {
          scrollTo({ left: 0, top: 0, behavior: "smooth" });
        }}
      >
        <button className="relative cursor-pointer hover:text-black/80">
          <ShoppingCart strokeWidth={2.5} />

          {/* Cart Badge */}
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center overflow-hidden rounded-full bg-black text-[10px] font-medium text-white">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={totalQuantity}
                  initial={{ y: direction === 1 ? 10 : -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction === 1 ? -10 : 10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  {totalQuantity}
                </motion.span>
              </AnimatePresence>
            </span>
          )}
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
