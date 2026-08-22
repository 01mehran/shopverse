// React Hooks;
import { useEffect } from "react";

// Zustand;
import { useShallow } from "zustand/shallow";

// Stores;
import { useUiStore } from "@/stores/useUiStore";

// Motion Components;
import { AnimatePresence, motion } from "motion/react";

// Types;
import type { VariantProps } from "@/shared/types/types";

// Icons;
import { Search, X } from "lucide-react";

export default function SearchBox({ variant }: VariantProps) {
  const { isSearchOpen, closeSearch } = useUiStore(
    useShallow((state) => ({
      isSearchOpen: state.isSearchOpen,
      closeSearch: state.closeSearch,
    })),
  );

  // Close search box with Escape button;
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (variant === "desktop") {
    return (
      // Desktop Search Box;
      <form className="bg-bg-muted hidden h-12 w-100 items-center gap-3 rounded-full px-4 transition duration-200 focus-within:ring-2 focus-within:ring-black md:flex lg:w-140">
        <Search size={20} className="text-black/40" />

        <input
          type="text"
          placeholder="Search for products..."
          className="w-full border-0 font-medium tracking-wide outline-0 placeholder:text-base placeholder:font-normal placeholder:text-black/40"
        />
      </form>
    );
  }

  return (
    // Mobile Search Box
    <AnimatePresence>
      {isSearchOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={closeSearch}
            className="absolute inset-0 z-40 w-full bg-black/20 backdrop-blur-2xl md:hidden"
          />

          <motion.form
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-bg-muted xs:max-w-120 absolute top-1/2 left-1/2 z-50 flex h-12 w-[90vw] -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full px-4 focus-within:ring-2 focus-within:ring-black md:hidden lg:w-140"
          >
            <Search size={20} className="text-black/40" />

            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-0 font-medium tracking-wide outline-0 placeholder:text-base placeholder:font-normal placeholder:text-black/40"
              autoFocus
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
  );
}
