import { useEffect, useState } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import { Link, useParams } from "react-router-dom";
import { Progress, Skeleton } from "antd";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { StyledSingleMedia } from "./styled";
import GenreMaker from "../../Components/AuxiliaryComponents/GenreMaker";
import RuntimeConverter from "../../Helpers/RuntimeConverter";

const SingleMedia = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);
  const [genreState, setGenreState] = useState([]);
  const [backdropSize, setBackdropSize] = useState("original");
  const { contentType, mediaId } = useParams();

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBackdropSize("w780");
    }  else {
      setBackdropSize("original");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'smooth',
    }); 
    if (!mediaId) return;
    const endpoint =
      contentType === "movie"
        ? `/movie/${mediaId}?append_to_response=credits,recommendations`
        : `/tv/${mediaId}?append_to_response=credits,recommendations`;
    myApi
      .get(endpoint)
      .then((res) => {
        setContent(res.data);
      })
      .catch((er) => {
        console.log("Error is:", er);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [mediaId, contentType]);

  useEffect(() => {
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
  }, []);

  const {
    title,
    name,
    backdrop_path,
    release_date,
    first_air_date,
    genres,
    episode_run_time,
    runtime,
    overview,
    credits,
    in_production,
    number_of_episodes,
    number_of_seasons,
    vote_average,
    recommendations,
  } = content;

  const publishDate = release_date ?? first_air_date;
  const duration = runtime ? runtime : episode_run_time;
  const ratingsGenerator = Math.floor(vote_average * 10);

  const topCastList = () => {
    if (!credits || !credits.cast) return [];
    return credits.cast
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 6)
      .map((item, index) => (
        <div key={index}>
          <img src={`${baseImgUrl.w92}${item.profile_path}`} />
          <h2> {item.name} </h2>
          <p> {item.character} </p>
        </div>
      ));
  };

  const recommendedMedia = () => {
    if (!recommendations || !recommendations.results) return [];
    return recommendations.results
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 6)
      .map((item, index) => (
        <Link to={`/contents/${release_date ? "movie" : "tv"}/${item.id}`} key={index}>
          <img src={`${baseImgUrl.w154}${item.poster_path}`} />
          <h2> {item.title ? item.title : item.name} </h2>
          <h3>
            {item.release_date
              ? item.release_date.slice(0, 4)
              : item.first_air_date.slice(0, 4)}
          </h3>
        </Link>
      ));
  };

  const renderDirector = () => {
    if (!credits) return null;
    if (contentType === "movie") {
      const director = credits?.crew?.find((item) => {
        return item.department === "Directing" && item.job === "Director";
      });
      return <span>Director: {director ? director.name : "N/A"}</span>;
    }
    if (contentType === "tv") {
      if (content.created_by && content.created_by.length > 0) {
        return (
          <span>
            Created by:
            {content.created_by.map((creator) => creator.name).join(", ")}
          </span>
        );
      } else {
        return <span>Creator not available</span>;
      }
    }
    return <span>Director/Creator not available</span>;
  };

  return (
    <SecondaryLayout>
      <StyledSingleMedia>
        <div className="backdrop-container">
          {loading ? (
            <Skeleton.Image />
          ) : (
            <img
              className="backdrop"
              src={`${baseImgUrl[backdropSize]}${backdrop_path}`}
              alt={title || name}
            />
          )}
        </div>
        <div>
          <h1>{title || name}</h1>
          <h3> {publishDate?.slice(0, 4)}</h3>
          <h3>
            <GenreMaker genreId={genres} genreState={genreState} />
          </h3>
          <h3>
            <RuntimeConverter timeSpan={duration} />
          </h3>
          <h3> {renderDirector()} </h3>
          {contentType !== "movie" && (
            <h4>
              {number_of_seasons > 1
                ? `${number_of_seasons} seasons`
                : `${number_of_seasons} season`}
              / {number_of_episodes} episodes :
              {in_production ? "In production" : "Finished"}
            </h4>
          )}
          <span>
            <span> Average rating </span>
            <Progress
              type="dashboard"
              steps={10}
              percent={ratingsGenerator}
              trailColor="rgba(250, 255, 254, 0.2)"
              strokeWidth={20}
              gapPosition="left"
              size={80}
            />
          </span>
          <span> {topCastList()} </span>
          <p> {overview} </p>
          {recommendedMedia()}
        </div>
      </StyledSingleMedia>
    </SecondaryLayout>
  );
};
export default SingleMedia;
