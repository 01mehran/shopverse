// React Router Dom;
import { Link } from "react-router-dom";

// Zustand;
import { useUiStore } from "@/stores/useUiStore";

// Types;
import type { VariantProps } from "@/shared/types/types";

export default function HeaderNavigation({
  variant = "desktop",
}: VariantProps) {
  const isMobile = variant === "mobile";
  const handleCloseSidebar = useUiStore((state) => state.handleCloseSidebar);

  const links = [
    { title: "Home", href: "/#hero" },
    { title: "On Sale", href: "/#top-selling" },
    { title: "New Arrivals", href: "/#new-arrivals" },
    { title: "Brands", href: "/#brands" },
  ];

  return (
    <nav className={isMobile ? "mt-0" : "hidden xl:block"}>
      <ul
        className={`${
          isMobile
            ? "flex flex-col items-start gap-5"
            : "flex items-center gap-4"
        } relative`}
      >
        {links.map((link) => (
          <li
            key={link.title}
            onClick={handleCloseSidebar}
            className={`${isMobile ? "navigation-links text-xl" : "navigation-links"} after:mx-auto after:-mt-0.5 after:block after:h-0.5 after:w-0 after:bg-black/80 after:transition-all after:duration-300 hover:after:w-full`}
          >
            <Link to={link.href} className="flex items-center gap-px">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
