import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }: { rating: number }) => {
  // Create an array [0, 1, 2, 3, 4] → for 5 stars
  const stars = Array.from({ length: 5 }, (_, i) => {
    const size = 17;
    const fullStar = i + 1 <= Math.floor(rating);
    const halfStar = !fullStar && i < rating; // e.g. 4 < 4.5

    return (
      <span key={i}>
        {fullStar ? (
          <FaStar size={size} className="text-yellow-400" />
        ) : halfStar ? (
          <FaStarHalfAlt size={size} className="text-yellow-400" />
        ) : (
          <FaRegStar size={size} className="text-yellow-400" />
        )}
      </span>
    );
  });

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
