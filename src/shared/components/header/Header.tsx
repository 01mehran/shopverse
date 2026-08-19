// React Router Dom;
import { Link } from "react-router-dom";

// Components;
import Container from "../Container";
import Sidebar from "./Sidebar";
import { HeaderNavigation } from "./HeaderNavigation";

// Motion Component;
import { AnimatePresence, motion } from "motion/react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Icons;
import { CircleUserRound, Menu, Search, ShoppingCart, X } from "lucide-react";

export default function Header() {
  const handleOpenSidebar = useUiStore((state) => state.handleOpenSidebar);
  const isSearchOpen = useUiStore((state) => state.isSearchOpen);
  const openSearch = useUiStore((state) => state.openSearch);
  const closeSearch = useUiStore((state) => state.closeSearch);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative overflow-hidden"
    >
      <Sidebar />

      {/* Mobile search box */}
      <AnimatePresence>
        {isSearchOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={closeSearch}
              className="absolute inset-0 z-40 w-full bg-black/20 backdrop-blur-md md:hidden"
            ></motion.div>

            <motion.form
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -100 }}

              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="bg-bg-muted xs:max-w-120 absolute top-1/2 left-1/2 z-50 flex h-12 w-[90vw] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full px-4 focus-within:ring-2 focus-within:ring-black md:hidden lg:w-140"
            >
              <Search size={20} className="text-black/40" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border-0 font-medium tracking-wide outline-0 placeholder:text-base placeholder:font-normal placeholder:text-black/40"
              />
              <button
                type="button"
                onClick={closeSearch}
                className="absolute top-1/2 right-4 z-50 -translate-y-1/2 cursor-pointer"
              >
                <X size={18} />
              </button>
            </motion.form>
          </>
        )}
      </AnimatePresence>

      <Container>
        <section className="relative flex w-full items-center justify-between py-5">
          <div className="flex items-center gap-4">
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

          {/* Search Box  */}
          <form className="bg-bg-muted hidden h-12 w-100 items-center gap-3 rounded-full px-4 transition duration-200 focus-within:ring-2 focus-within:ring-black md:flex lg:w-140">
            <Search size={20} className="text-black/40" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-0 font-medium tracking-wide outline-0 placeholder:text-base placeholder:font-normal placeholder:text-black/40"
            />
          </form>

          {/* Cart & User Icons  */}
          <div className="flex items-baseline gap-2.5">
            <Link to={`/cart`}>
              <button className="cursor-pointer focus-within:border-0 focus-within:border-b-2 focus-within:outline-0 hover:text-black/80">
                <ShoppingCart strokeWidth={2.5} />
              </button>
            </Link>
            <button className="cursor-pointer focus-within:border-0 focus-within:border-b-2 focus-within:outline-0 hover:text-black/80">
              <CircleUserRound strokeWidth={2.5} />
            </button>
            <button
              onClick={openSearch}
              className="cursor-pointer focus-within:border-0 hover:text-black/80 focus:border-b-2 focus:outline-0 md:hidden"
            >
              <Search strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </Container>
    </motion.header>
  );
}
