// React Router Dom;
import { Link } from "react-router-dom";

export default function EmptyState() {
  return (
    <section className="flex flex-col items-center justify-center py-18 text-center text-sm text-black/50">
      <article className="flex flex-col -space-y-1">
        <p className="font-IntegralCF text-sm md:text-lg">
          Your cart is empty.
        </p>
        <p className="font-IntegralCF text-sm md:text-lg">
          Add some products to your cart
        </p>
      </article>

      <nav className="mt-2 flex items-center gap-2">
        <Link
          to="/#new-arrivals"
          className="font-semibold underline underline-offset-2"
        >
          New Arrivals
        </Link>
        <Link
          to="/#top-selling"
          className="font-semibold underline underline-offset-2"
        >
          Top Selling
        </Link>
      </nav>
    </section>
  );
}
