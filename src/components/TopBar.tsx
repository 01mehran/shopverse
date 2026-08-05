//I
import { X } from "lucide-react";

export default function TopBar() {
  return (
    <section className="relative flex items-center justify-center bg-black py-2 text-center text-xs sm:text-sm">
      <p className="font-Satoshi text-white">
        Sign up and get 20% off to your first order.
        {/* Sign up */}
        <a href="#" className="ml-1 capitalize underline hover:text-white/90">
          sign up now
        </a>
      </p>

      {/* X Button */}
      <button className="right-45 hidden cursor-pointer text-white hover:text-white/90 lg:absolute lg:block">
        <X size={20} />
      </button>
    </section>
  );
}
