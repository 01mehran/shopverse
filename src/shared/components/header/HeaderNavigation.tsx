// Icons;
import { ChevronDown } from "lucide-react";

type HeaderNavigationProps = {
  variant: "mobile" | "desktop";
};

export const HeaderNavigation = ({
  variant = "desktop",
}: HeaderNavigationProps) => {
  const isMobile = variant === "mobile";

  return (
    <nav className={isMobile ? "mt-16" : "hidden xl:block"}>
      <ul
        className={
          isMobile
            ? "flex flex-col items-start gap-5 px-10"
            : "flex items-center gap-4"
        }
      >
        <li
          className={isMobile ? "navigation-links text-xl" : "navigation-links"}
        >
          <a className="flex items-center gap-px">
            Shop
            <span>
              <ChevronDown size={18} />
            </span>
          </a>
        </li>

        <li
          className={isMobile ? "navigation-links text-xl" : "navigation-links"}
        >
          <a>On Sale</a>
        </li>

        <li
          className={isMobile ? "navigation-links text-xl" : "navigation-links"}
        >
          <a>New Arrivals</a>
        </li>

        <li
          className={isMobile ? "navigation-links text-xl" : "navigation-links"}
        >
          <a>Brands</a>
        </li>
      </ul>
    </nav>
  );
};
