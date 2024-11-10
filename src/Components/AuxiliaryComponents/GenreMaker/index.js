const GenreMaker = ({ genreId = [], genreState = [] }) => {

  return (
    <p className="movie-genres">
      {genreState.length > 0 &&
        genreId.map((item, index) => {
          const singleId = typeof item === "object" ? item.id : item;

          const filteredResult = genreState.find(({ id }) => id === singleId);
          return (
            <span key={filteredResult.id}>
              {filteredResult.name}
              {index < genreId.length - 1 && (
                <span className="separator"> . </span>
              )}
            </span>
          );
        })}
    </p>
  );
};
export default GenreMaker;
