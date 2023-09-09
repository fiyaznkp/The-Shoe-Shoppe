import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const normalizedRating = Math.min(Math.max(rating, 0), totalStars);
  const filledStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating - filledStars >= 0.5;

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < filledStars ? (
            <FaStar style={{ color: 'gold' }} />
          ) : (
            index === filledStars && hasHalfStar ? (
              <FaStar style={{ color: 'gold' }} />
            ) : (
              <FaStar style={{ color: 'lightgrey' }} />
            )
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
