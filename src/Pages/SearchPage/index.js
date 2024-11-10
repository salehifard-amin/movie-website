import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../Components/Layouts/MainLayout";
import { SearchStyled } from "./styled";
import { useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import GenreMaker from "../../Components/AuxiliaryComponents/GenreMaker";

const SearchPage = () => {
  const [searchContent, setSearchContent] = useState({});
  const [genreState, setGenreState] = useState([]);

  const location = useLocation();
  const { searchValue } = location.state || {};

  useEffect(() => {
    myApi
      .get(`/search/multi?query= ${searchValue}`)
      .then((res) => {
        setSearchContent(res.data);

      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  useEffect(() => {
    if (!searchContent.data) return;
    console.log("searchContent",searchContent);

    const contentType = searchContent.data.release_date ? "movie" : "tv";
    const genreEndpoint =
      contentType === "movie" ? "/genre/movie/list" : "/genre/tv/list";
    myApi
      .get(genreEndpoint)
      .then((res) => {
        setGenreState(res.data.genres);
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, [searchContent]);

  const renderFarm = () => {
    if (!searchContent || !searchContent.results) return;

    return searchContent.results
      .filter((item) => !!item.poster_path && item.vote_count > 5)
      .sort((a, b) => {
        if (b.popularity !== a.popularity) {
          return b.popularity - a.popularity;
        }
        return b.vote_count - a.vote_count;
      })
      .map(
        ({
          id,
          name,
          title,
          poster_path,
          first_air_date,
          release_date,
          overview,
          genre_ids,
        }) => {
          return (
            <Link to={`/contents/${release_date ? "movie" : "tv"}/${id}`} key={id}>
              <div className="content-wrapper wrapper">
                <img
                  src={`${baseImgUrl.w300}${poster_path}`}
                  alt={title ? title : name}
                />
                <div className="content-details-holder">
                  <p>{title ? title : name} </p>
                  <GenreMaker genreId={genre_ids} genreState={genreState} />
                  <p> {first_air_date ? first_air_date : release_date} </p>
                  <p className="overview">
                    {overview &&
                      (overview.length > 180
                        ? `${overview.substring(0, 177)}...`
                        : overview)}
                  </p>
                </div>
              </div>
            </Link>
          );
        }
      );
  };

  return (
    <MainLayout>
      <SearchStyled>
        <p>
          showing results for :{" "}
          <span className="search-query">{searchValue}...</span>
        </p>
        <div>{renderFarm()}</div>
      </SearchStyled>
    </MainLayout>
  );
};
export default SearchPage;
