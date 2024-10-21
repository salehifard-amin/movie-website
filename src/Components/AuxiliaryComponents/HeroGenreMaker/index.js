import { useEffect, useState } from "react";
import { myApi } from "../../../Helpers/BaseUrl/baseApi";
import GlobalStyle from "../../../GlobalStyles";

const HeroGenreMaker = ({ genreId = [] }) => {
  const [genreData, setGenreData] = useState([]);

  useEffect(() => {
    console.log(genreId);
    myApi
      .get("/genre/movie/list")
      .then((result) => {
        setGenreData(result.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="movie-genres">
      <GlobalStyle />
      {genreData.length > 0 &&
        genreId.map((callBackId, index) => {
          const FilteredResult = genreData.find(({ id }) => id === callBackId);
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
export default HeroGenreMaker;
