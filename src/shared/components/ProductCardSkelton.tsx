type props = {
  count?: number;
};

export default function ProductCardSkelton({ count = 4 }: props) {
  return (
    <div className="hide-scrollbar flex snap-x snap-mandatory items-baseline justify-between gap-3 overflow-x-auto py-4">
      {Array.from({ length: count }).map((_, index) => (
        <article
          key={index}
          className="xs:min-w-54 min-w-45 space-y-1 rounded-xl md:min-w-72"
        >
          {/* Image */}
          <div className="bg-bg-muted mb-2 h-54 w-full animate-pulse rounded-xl sm:h-70" />

          {/* Name */}
          <div className="bg-bg-muted h-5 w-3/4 animate-pulse rounded md:h-6" />

          {/* Rating */}
          <div className="bg-bg-muted h-5 w-22 animate-pulse rounded sm:h-6 sm:w-32" />

          {/* Price */}
          <div className="bg-bg-muted h-6 w-20 animate-pulse rounded sm:h-6" />
        </article>
      ))}
    </div>
  );
}
