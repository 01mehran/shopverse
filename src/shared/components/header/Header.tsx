// React Router Dom;
import { Link } from "react-router-dom";

// Components;
import Container from "../Container";
import Sidebar from "./Sidebar";
import HeaderNavigation from "./HeaderNavigation";
import SearchBox from "./SearchBox";

// Motion Component;
import { motion } from "motion/react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Zustand;
import { useShallow } from "zustand/shallow";

// Icons;
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const { handleOpenSidebar, openSearch } = useUiStore(
    useShallow((state) => ({
      handleOpenSidebar: state.handleOpenSidebar,
      openSearch: state.openSearch,
    })),
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="shadow-[2px_2px_2px_rgba(0, 0, 0, 0.7)] sticky top-0 z-50 overflow-hidden rounded-b-xl bg-white shadow"
    >
      <Sidebar />

      <SearchBox variant="mobile" />

      <Container>
        <section className="relative flex w-full items-center justify-between py-5">
          <div className="flex items-baseline-last gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={handleOpenSidebar}
              className={`blcok cursor-pointer border-0 outline-0 xl:hidden`}
            >
              <Menu strokeWidth={2.5} size={24} />
            </button>

            {/* Title */}
            <h1 className="font-IntegralCF text-[25px] font-bold md:text-[32px]">
              SHOP.CO
            </h1>
          </div>

          {/* Navigation Buttons */}
          <HeaderNavigation variant="desktop" />

          <SearchBox variant="desktop" />

          {/* Cart & User Icons  */}
          <div className="flex items-baseline gap-2.5">
            <Link to={`/cart`}>
              <button className="cursor-pointer focus-within:border-0 hover:text-black/80">
                <ShoppingCart strokeWidth={2.5} />
              </button>
            </Link>
            <button className="cursor-pointer focus-within:border-0 hover:text-black/80">
              <CircleUserRound strokeWidth={2.5} />
            </button>
            <button
              onClick={openSearch}
              className="cursor-pointer focus-within:border-0 hover:text-black/80 focus:outline-0 md:hidden"
            >
              <Search strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </Container>
    </motion.header>
  );
}
