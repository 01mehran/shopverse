// React Router Dom;
import { Link } from "react-router-dom";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Icons;
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

export default function HeaderIcons() {
  const openSearch = useUiStore((state) => state.openSearch);

  return (
    <section className="flex items-baseline gap-2.5">
      {/* Cart Icon; */}
      <Link to={`/cart`}>
        <button className="relative cursor-pointer focus-within:border-0 hover:text-black/80">
          <ShoppingCart strokeWidth={2.5} />

          {/* Cart Badge  */}
          <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
            1
          </span>
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
