
const GenreMaker = ({ genreId = [], genreMap = {} }) => {

  return (
    <p className="movie-genres">
      {genreId &&
        genreId.map((item, index) => {
          const singleId = typeof item === "object" ? item.id : item;
          const filteredResult = genreMap[singleId];
          
          if (!filteredResult) {
            return null;
          }
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