const GenreMaker = ({ genreId = [], genreState = [] }) => {

  return (
    <div className="movie-genres">
      {genreState.length > 0 &&
        genreId.map((item, index) => {
          const singleId = typeof item === "object" ? item.id : item;

          const FilteredResult = genreState.find(({ id }) => id === singleId);
          return (
            <span key={FilteredResult.id}>
              {FilteredResult.name}
              {index < genreId.length - 1 && (
                <span className="separator"> . </span>
              )}
            </span>
          );
        })}
    </div>
  );
};
export default GenreMaker;
