type product = {
  id: number;
  image: string;
  name: string;
  rating: number;
  price: number;
};

type ProductCardProps = {
  item: product;
};

import ratingStart from "@images/home/rating-start.png";

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <section>
      <article className="xs:min-w-54 min-w-44 space-y-1 rounded-xl md:min-w-72">
        <div className="bg-bg-muted mb-2 flex items-center justify-center rounded-xl">
          <img
            src={item.image}
            alt="arrivals clothes"
            className="h-54 w-60 rounded-xl object-cover sm:h-70"
          />
        </div>
        <p className="font-Satoshi text-sm font-bold md:text-lg">{item.name}</p>

        <img src={ratingStart} alt="rating-satar" className="w-22 sm:w-32" />

        <p className="font-Satoshi text-lg font-bold sm:text-2xl">
          ${item.price}
        </p>
      </article>
    </section>
  );
}
