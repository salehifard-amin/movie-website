
export const getStarRating = (voteAverage) => {
  const maxStars = 5;
  const scaledRating = (voteAverage / 10) * maxStars; 
  const fullStars = Math.floor(scaledRating);
  const hasHalfStar = scaledRating - fullStars >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
  return { fullStars, hasHalfStar, emptyStars };
};