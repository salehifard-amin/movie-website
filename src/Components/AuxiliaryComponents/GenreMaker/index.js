
const GenreMaker = ({ genreId=[] , genreState=[] }) => {

  // useEffect(() => {
  //   myApi
  //     .get("/genre/movie/list")
  //     .then((res) => {
  //       setGenreState(res.data.genres);
  //       console.log('genreApi:', res.data.genres );
  //     })
  //     .catch((er) => {
  //       console.log("Error is:", er);
  //     });
  // }, []);

  return (
    <div className="movie-genres">
      {genreState.length > 0 &&
        genreId.map((callBackId, index) => {
          const FilteredResult = genreState.find(({ id }) => id === callBackId);
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
