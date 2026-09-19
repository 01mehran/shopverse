// Components;
import Star from "./Star";

// Types;
type RatingStarsProps = {
  rating: number;
};

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <span className="flex items-center space-x-px">
      {[1, 2, 3, 4, 5].map((rate) => {
        if (rating >= rate) {
          return <Star key={rate} />;
        }

        if (rating >= rate - 0.5) {
          return <Star key={rate} half />;
        }

        return null;
      })}
    </span>
  );
}
