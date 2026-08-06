// Components;
import Container from "./Container";

// Icons;
import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";

// Images;
import shopLogo from "@/assets/SHOP.CO.png";

export default function Header() {
  return (
    <header>
      <Container>
        <section className="flex w-full items-center justify-between py-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button className="blcok xl:hidden">
              <Menu strokeWidth={2.5} size={24} />
            </button>

            {/* Logo */}
            <img
              src={shopLogo}
              alt="shop logo | SHOP.CO"
              className="w-30 object-cover sm:w-auto"
            />
          </div>

          {/* Navigation Buttons */}
          <nav className="hidden xl:block">
            <ul className="font-Satoshi flex items-center gap-4">
              <li className="navigation-links">
                <a className="flex items-center gap-px">
                  shop{" "}
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </a>
              </li>
              <li className="navigation-links">
                <a>on sale</a>
              </li>
              <li className="navigation-links">
                <a>new arrivals</a>
              </li>
              <li className="navigation-links">
                <a>brands</a>
              </li>
            </ul>
          </nav>

          {/* Search Box  */}
          <form className="bg-bg-muted font-Satoshi hidden h-12 w-100 items-center gap-3 rounded-full px-4 transition duration-200 focus-within:ring-2 focus-within:ring-black md:flex lg:w-140">
            <Search size={20} className="text-black/40" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full border-0 font-medium tracking-wide outline-0 placeholder:text-base placeholder:font-normal placeholder:text-black/40"
            />
          </form>

          {/* Cart & User Icons  */}
          <div className="flex items-center gap-2.5">
            <button className="cursor-pointer focus-within:border-0 focus-within:border-b-2 focus-within:outline-0 hover:text-black/80">
              <ShoppingCart strokeWidth={2.5} />
            </button>
            <button className="cursor-pointer focus-within:border-0 focus-within:border-b-2 focus-within:outline-0 hover:text-black/80">
              <CircleUserRound strokeWidth={2.5} />
            </button>
            <button className="cursor-pointer focus-within:border-0 hover:text-black/80 focus:border-b-2 focus:outline-0 md:hidden">
              <Search strokeWidth={2.5} />
            </button>
          </div>
        </section>
      </Container>
    </header>
  );
}
