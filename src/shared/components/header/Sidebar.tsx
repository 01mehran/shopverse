// React Hooks;
import { useEffect } from "react";

// Components;
import HeaderNavigation from "./HeaderNavigation";

// Motion Component;
import { AnimatePresence, motion } from "motion/react";

// Icons;
import { X } from "lucide-react";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Zustand;
import { useShallow } from "zustand/shallow";

export default function Sidebar() {
  const { isSidebarOpen, handleCloseSidebar } = useUiStore(
    useShallow((state) => ({
      isSidebarOpen: state.isSidebarOpen,
      handleCloseSidebar: state.handleCloseSidebar,
    })),
  );

  // Close sidebar with "Escape" button on keyboard;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseSidebar]);

  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleCloseSidebar}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md xl:hidden"
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
            className="bg-bg-muted/85 fixed top-0 left-0 z-50 h-screen w-[80vw] max-w-100 rounded-r-2xl xl:hidden"
          >
            <button
              onClick={handleCloseSidebar}
              className="absolute top-6 right-6 cursor-pointer"
            >
              <X />
            </button>

            <HeaderNavigation variant="mobile" />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
