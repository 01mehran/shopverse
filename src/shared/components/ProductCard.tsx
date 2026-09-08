// React Router Dom;
import { Link } from "react-router-dom";

// Componnets;
import Star from "./Star";

// Types;
import type { ProductCardProps } from "../types/types";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <section>
      <Link
        to={`/product-details/${product.id}`}
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <article className="xs:min-w-54 min-w-45 space-y-1 rounded-xl md:min-w-72">
          {/* Product Image */}
          <div className="bg-bg-muted mb-2 flex items-center justify-center rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-54 w-60 rounded-xl object-cover sm:h-70"
              loading="lazy"
            />
          </div>

          {/* Product Name  */}
          <p className="text-base font-bold md:text-xl">{product.name}</p>

          <div className="flex items-center gap-3">
            <span className="flex items-center space-x-px">
              {[1, 2, 3, 4, 5].map((rate) => {
                if (product.rating >= rate) {
                  return <Star key={rate} />;
                }

                if (product.rating >= rate - 0.5) {
                  return <Star key={rate} half />;
                }

                return null;
              })}
            </span>
            <span className="sm:text-md text-sm font-semibold">
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Product Price */}
          <p className="text-xl font-bold sm:text-2xl">${product.price}</p>
        </article>
      </Link>
    </section>
  );
}
