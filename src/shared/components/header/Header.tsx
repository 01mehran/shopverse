// Components;
import Container from "../Container";
import Sidebar from "./Sidebar";
import HeaderNavigation from "./HeaderNavigation";
import SearchBox from "./SearchBox";
import HeaderIcons from "./HeaderIcons";

// Motion Component;
import { motion } from "motion/react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Icons;
import { Kanban } from "lucide-react";

export default function Header() {
  const handleOpenSidebar = useUiStore((state) => state.handleOpenSidebar);

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
        <main className="relative flex w-full items-center justify-between py-3">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={handleOpenSidebar}
              className={`blcok mt-1 -rotate-90 cursor-pointer border-0 outline-0 xl:hidden`}
            >
              <Kanban strokeWidth={2.5} size={24} />
            </button>

            {/* Title */}
            <h1 className="font-IntegralCF text-[25px] font-bold md:text-[32px]">
              SHOP.CO
            </h1>
          </div>

          <HeaderNavigation variant="desktop" />

          <SearchBox variant="desktop" />

          <HeaderIcons />
        </main>
      </Container>
    </motion.header>
  );
}
