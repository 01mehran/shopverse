// Componentsl
import { Container, ProductCard } from "@/shared/components";

// Static Data;
import { products } from "../data";

export default function MightLikeProducts() {
  return (
    <section>
      <Container>
        <section className="py-10 sm:py-16">
          <h1 className="font-IntegralCF mb-2 text-center text-[28px] leading-8 font-extrabold sm:text-[40px]">
            YOU MIGHT <br className="xs:hidden" /> ALSO LIKE
          </h1>

          <div className="hide-scrollbar flex items-center justify-between gap-3 overflow-x-auto py-4">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
}
