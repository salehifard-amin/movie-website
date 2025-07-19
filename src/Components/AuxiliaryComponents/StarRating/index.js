import { getStarRating } from "../../../Helpers/getStarRating";
import { StyledStarRating } from "./styled";

const StarRating = ({ voteAverage }) => {
  const { fullStars, hasHalfStar, emptyStars } = getStarRating(voteAverage);

  return (
    <StyledStarRating>
      <div className="star-rating">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="star full">
            ★
          </span>
        ))}
        {hasHalfStar && (
          <span key="half" className="star half">
            ★
          </span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="star empty">
            ★
          </span>
        ))}
      </div>
    </StyledStarRating>
  );
};
export default StarRating;
