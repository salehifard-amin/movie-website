import { Link, useLocation } from "react-router-dom";
import MainLayout from "../../Components/Layouts/MainLayout";
import { SearchStyled } from "./styled";
import { useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Progress } from "antd";

const SearchPage = () => {
  const [searchContent, setSearchContent] = useState({});

  const location = useLocation();
  const { searchValue } = location.state || {};
  console.log("searchCon", searchContent);

  useEffect(() => {
    myApi
      .get(`/search/multi?query=${searchValue}`)
      .then((res) => {
        setSearchContent(res.data);
      })
      .catch((err) => console.log(err));
  }, [searchValue]);

  const renderFarm = () => {
    if (!searchContent?.results || searchContent.results.length === 0)
      return "";
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
          vote_average,
        }) => {
          return (
            <Link
              to={`/contents/${release_date ? "movie" : "tv"}/${id}`}
              key={id} className="main-link"
            >
              <div className="content-wrapper flex justify-around wrapper">
                <img
                  src={`${baseImgUrl.w300}${poster_path}`}
                  alt={title ? title : name}
                />
                <div className="content-details-holder">
                  <p className="content-title">{title ? title : name} </p>
                  <p className="publish-date"> {first_air_date ? first_air_date.slice(0 , 4) : release_date.slice(0 , 4)} </p>
                  <Progress
                    type="circle"
                    steps={8}
                    percent={Math.floor(vote_average * 10)}
                    trailColor="rgba(250, 255, 254, 0.2)"
                    size={50}
                    className="rating-progress"
                    strokeColor={"gold"}
                    strokeWidth={10}  
                  />
                  <p className="overview">
                    {overview &&
                      (overview.length > 200
                        ? `${overview.substring(0, 197)}...`
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
        <p className="search-query-holder">
          showing results for :
          <span className="search-query">{searchValue}...</span>
        </p>
        <div>{renderFarm()}</div>
      </SearchStyled>
    </MainLayout>
  );
};
export default SearchPage;
