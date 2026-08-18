// Motion Component;
import { AnimatePresence, motion } from "motion/react";

// Icons;
import { ChevronDown, X } from "lucide-react";

type SidbarProps = {
  isSidebarOpen: boolean;
  handleToggleSidebar: () => void;
};

export default function Sidebar({
  isSidebarOpen,
  handleToggleSidebar,
}: SidbarProps) {
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
            onClick={handleToggleSidebar}
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
            className="bg-bg-muted/70 fixed top-0 left-0 z-50 h-screen w-[80vw] max-w-100 rounded-r-2xl xl:hidden"
          >
            <button
              onClick={handleToggleSidebar}
              className="absolute top-6 right-6 cursor-pointer"
            >
              <X />
            </button>

            <nav className="mt-16">
              <ul className="flex flex-col items-start gap-5 px-10">
                <li className="navigation-links text-xl">
                  <a className="flex items-center gap-px">
                    Shop
                    <span>
                      <ChevronDown size={18} />
                    </span>
                  </a>
                </li>

                <li className="navigation-links text-xl">
                  <a>On Sale</a>
                </li>

                <li className="navigation-links text-xl">
                  <a>New Arrivals</a>
                </li>

                <li className="navigation-links text-xl">
                  <a>Brands</a>
                </li>
              </ul>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
