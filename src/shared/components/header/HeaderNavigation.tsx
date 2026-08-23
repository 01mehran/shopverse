// React Router Dom;
import { Link } from "react-router-dom";

// Zustand;
import { useUiStore } from "@/stores/useUiStore";

// Types;
import type { VariantProps } from "@/shared/types/types";

// Icons;
import { ChevronDown } from "lucide-react";

export default function HeaderNavigation({
  variant = "desktop",
}: VariantProps) {
  const isMobile = variant === "mobile";
  const handleCloseSidebar = useUiStore((state) => state.handleCloseSidebar);

  const links = [
    { title: "Shop", href: "/#hero" },
    { title: "On Sale", href: "/#top-selling" },
    { title: "New Arrivals", href: "/#new-arrivals" },
    { title: "Brands", href: "/#brands" },
  ];

  return (
    <nav className={isMobile ? "mt-16" : "hidden xl:block"}>
      <ul
        className={
          isMobile
            ? "flex flex-col items-start gap-5 px-10"
            : "flex items-center gap-4"
        }
      >
        {links.map((link) => (
          <li
            key={link.title}
            onClick={handleCloseSidebar}
            className={
              isMobile ? "navigation-links text-xl" : "navigation-links"
            }
          >
            <Link to={link.href} className="flex items-center gap-px">
              {link.title}

              {link.title === "Shop" && (
                <span>
                  <ChevronDown size={18} />
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
