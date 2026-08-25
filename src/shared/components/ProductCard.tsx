// React Router Dom;
import { Link } from "react-router-dom";

// Types;
import type { ProductCardProps } from "../types/types";

// Static Images;
import ratingStart from "@images/home/rating-start.png";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section>
      <Link
        to={`/product-details`}
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <article className="xs:min-w-54 min-w-45 space-y-1 rounded-xl md:min-w-72">
          <div className="bg-bg-muted mb-2 flex items-center justify-center rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-54 w-60 rounded-xl object-cover sm:h-70"
            />
          </div>
          <p className="text-base font-bold md:text-xl">{product.name}</p>
          <img src={ratingStart} alt="rating-satar" className="w-22 sm:w-32" />
          <p className="text-xl font-bold sm:text-2xl">${product.price}</p>
        </article>
      </Link>
    </section>
  );
}
