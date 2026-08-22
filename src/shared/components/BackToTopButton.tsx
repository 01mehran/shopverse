// React Hooks;
import { useEffect } from "react";

// Zustand;
import { useUiStore } from "@/stores/useUiStore";
import { useShallow } from "zustand/shallow";

// Icons;
import { ChevronUp } from "lucide-react";

// Motion Compoents;
import { AnimatePresence, motion } from "motion/react";

export default function BackToTopButton() {
  const { showBackToTop, setShowBackToTop } = useUiStore(
    useShallow((state) => ({
      showBackToTop: state.showBackToTop,
      setShowBackToTop: state.setShowBackToTop,
    })),
  );

  useEffect(() => {
    const handleScrollY = () => {
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ y: -2 }}
          onClick={handleBackToTop}
          className={`bg-bg-muted shadow-[14px_4px_4px_4px_rgba(0, 0, 0, 0.6)] fixed right-4 bottom-4 z-20 flex size-8 cursor-pointer items-center justify-center rounded-full border border-black/20 text-black/80 shadow sm:right-6 sm:bottom-8 sm:size-10`}
        >
          <ChevronUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
