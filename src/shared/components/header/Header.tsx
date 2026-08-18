// React Router Dom;
import { Link } from "react-router-dom";

// Components;
import Container from "../Container";
import Sidebar from "./Sidebar";
import { HeaderNavigation } from "./HeaderNavigation";

// Motion Component;
import { motion } from "motion/react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Icons;
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";

export default function Header() {
  const handleOpenSidebar = useUiStore((state) => state.handleOpenSidebar);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Sidebar />

      <Container>
        <header className="flex w-full items-center justify-between py-5">
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
            <button className="cursor-pointer focus-within:border-0 hover:text-black/80 focus:border-b-2 focus:outline-0 md:hidden">
              <Search strokeWidth={2.5} />
            </button>
          </div>
        </header>
      </Container>
    </motion.header>
  );
}
