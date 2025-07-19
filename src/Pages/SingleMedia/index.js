import { useEffect, useMemo, useState } from "react";
import SecondaryLayout from "../../Components/Layouts/SecondaryLayout";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import { Link, useParams } from "react-router-dom";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { DrawerStyled, StyledSingleMedia, SwiperSlideStyled } from "./styled";
import GenreMaker from "../../Components/AuxiliaryComponents/GenreMaker";
import RuntimeConverter from "../../Helpers/RuntimeConverter";
import BackdropOverlay from "../../Components/AuxiliaryComponents/BackdropOverlay";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { Button, Card, Divider, Progress, Spin, Tabs, Tooltip } from "antd";

const SingleMedia = () => {
  const [content, setContent] = useState({});
  const [drawerLoading, setDrawerLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [genreState, setGenreState] = useState([]);
  const [backdropSize, setBackdropSize] = useState("154");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedActor, setSelectedActor] = useState(null);
  const [actorDetails, setActorDetails] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const { contentType, mediaId } = useParams();
  

  useEffect(() => {
    document.title = content?.name || content?.title || "Content page";
    if (content.backdrop_path && content.poster_path) {
      const updateImageSrc = () => {
        const isMobile = window.innerWidth <= 576;
        const isTablet = window.innerWidth >= 768 && window.innerWidth <= 992;
        setBackdropSize(isMobile ? "w342" : isTablet ? "w780" : "w154");
        setImageSrc(isMobile ? content.poster_path : content.backdrop_path);
      };
      updateImageSrc();
    }
  }, [content.backdrop_path, content.poster_path]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (!mediaId) return;
    setLoading(true);
    const endpoint =
      contentType === "movie"
        ? `/movie/${mediaId}?append_to_response=credits,recommendations,reviews,videos`
        : `/tv/${mediaId}?append_to_response=credits,recommendations,reviews,videos`;
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
    const localGenres =
      contentType === "movie"
        ? JSON.parse(localStorage.getItem("movieGenres"))
        : JSON.parse(localStorage.getItem("tvGenres"));
    if (localGenres) {
      setGenreState(localGenres);
    } else {
      myApi
        .get(`/genre/${contentType}/list`)
        .then((res) => {
          setGenreState(res.data.genres);
          localStorage.setItem(
            `${contentType}Genres`,
            JSON.stringify(res.data.genres)
          );
        })
        .catch((error) => console.error("Failed to fetch genres:", error));
    }
  }, []);
  const genreMap = useMemo(() => {
    return genreState?.reduce((accumulator, genre) => {
      accumulator[genre.id] = genre;
      return accumulator;
    }, {});
  }, [genreState]);

  useEffect(() => {
    if (!selectedActor) return;
    myApi
      .get(`/person/${selectedActor.id}`)
      .then((res) => {
        setActorDetails(res.data);
      })
      .catch((er) => {
        console.log("Error is:", er);
      })
      .finally(() => {
        setDrawerLoading(false);
      });
  }, [selectedActor]);

  const {
    title,
    name,
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
    reviews,
    videos,
  } = content;
  const publishDate = release_date ?? first_air_date;
  const duration = runtime ? runtime : episode_run_time;
  const ratingsGenerator = Math.floor(vote_average * 10);
  const userReviews = () => {
    if (!reviews || !reviews.results) return [];
    return reviews.results.slice(0, 3).map((item, index) => ({
      key: index + 1,
      label: item.author,
      children: (
        <div className="review-item">
          {item.content.length > 400 ? (
            <span>
              {item.content.slice(0, 400)}...
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                continue reading
              </a>
            </span>
          ) : (
            item.content
          )}
        </div>
      ),
    }));
  };

  const topCastList = () => {
    if (!credits || !credits.cast) return [];
    return credits.cast
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 6)
      .map((item, index) => (
        <SwiperSlideStyled key={index}>
          <div className="actor-item" onClick={() => openActorDrawer(item)}>
            <img src={`${baseImgUrl.w185}${item.profile_path}`} />
            <p className="actor-name"> {item.name} </p>
            <p className="actor-character"> {item.character} </p>
          </div>
        </SwiperSlideStyled>
      ));
  };

  const openActorDrawer = (actor) => {
    setSelectedActor(actor);
    setDrawerOpen(true);
  };

  const closeActorDrawer = () => {
    setDrawerOpen(false);
    setSelectedActor(null);
    setActorDetails({});
    setDrawerLoading(true);
  };

  const recommendedMedia = () => {
    if (!recommendations || !recommendations.results) return [];
    return recommendations.results
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 8)
      .map((item, index) => (
        <SwiperSlide key={index}>
          <Link to={`/contents/${release_date ? "movie" : "tv"}/${item.id}`}>
            <Card
              type="inner"
              bordered={false}
              hoverable
              cover={<img src={`${baseImgUrl.w300}${item.poster_path}`} />}
              style={{
                width: 180,
                color: "#333333",
                backgroundColor: "#D3D3D3",
                margin: "0 auto",
                height: "auto",
                minHeight: "346px",
              }}
            >
              <Tooltip title={item.title ? item.title : item.name}>
                <p className="recommend-card-title">
                  {item.title ? item.title : item.name}
                </p>
                <p>
                  {item.release_date
                    ? item.release_date.slice(0, 4)
                    : item.first_air_date.slice(0, 4)}
                </p>
              </Tooltip>
            </Card>
          </Link>
        </SwiperSlide>
      ));
  };

  const renderDirector = () => {
    if (!credits) return null;
    if (contentType === "movie") {
      const director = credits?.crew?.find((item) => {
        return item.department === "Directing" && item.job === "Director";
      });
      return (
        <p>
          <span>Director: </span> {director ? director.name : "N/A"}
        </p>
      );
    }
    if (contentType === "tv") {
      if (content.created_by && content.created_by.length > 0) {
        return (
          <p>
            <span>Created by: </span>
            {content.created_by.map((creator) => creator.name).join(", ")}
          </p>
        );
      } else {
        return <span>Creator not available</span>;
      }
    }
    return <span>Director/Creator not available</span>;
  };

  const titleFontSize = (title || name)?.length < 20 ? "35px" : "22px";
  const scrollToTrailer = () => {
    const trailerEl = document.querySelector(".iframe-wrapper");
    if (trailerEl)
      trailerEl.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  };

 const findTrailer = videos?.results?.find(({type,site})=> type === "Trailer" && site === "YouTube");
  if(videos?.results?.length) console.log(findTrailer);
  
  
  
  return (
    <SecondaryLayout>
      <StyledSingleMedia $fontProps={titleFontSize}>
        <BackdropOverlay />
        <div className="background-wrapper"></div>
        <div className="backdrop-container">
          {loading ? (
            <Spin size="large" className="spin" />
          ) : (
            <img
              className="backdrop"
              src={`${baseImgUrl[backdropSize]}${imageSrc}`}
              alt={title || name}
            />
          )}
          {!loading && <div className="blur"></div>}
        </div>
        <div className="hero">
          <div className="poster-container">
            <img
              className="poster"
              src={`${baseImgUrl["w185"]}${content.poster_path}`}
              alt={title || name}
            />
          </div>
          <div className="hero-contents">
            <h1 className="main-title">{title || name}</h1>
            <div className="hero-details-container">
              <p> {publishDate?.slice(0, 4)}</p>
              <div className="genres">
                <GenreMaker genreId={genres} genreMap={genreMap} />
              </div>
              <div className="creators"> {renderDirector()} </div>
              <Button
                onClick={scrollToTrailer}
                className="play-button"
                icon={<PlayCircleOutlined />}
              ></Button>
            </div>
          </div>
        </div>
        <Divider
          style={{
            borderColor: "#777d6b",
          }}
          className="hero-divider"
        >
          Details
        </Divider>
        <div className="details wrapper">
          <div className="left-details">
            <p> {overview} </p>
          </div>
          <Divider
            type="vertical"
            style={{
              borderColor: "#777d6b",
              height: "130px",
            }}
            className="details-divider"
          />
          <div className="right-details">
            <div className="rating">
              <span className="test"> Average rating </span>
              <Progress
                type="dashboard"
                steps={10}
                percent={ratingsGenerator}
                trailColor="rgba(250, 255, 254, 0.2)"
                strokeWidth={20}
                gapPosition="left"
                size={70}
                className="rating-progress"
              />
            </div>
            <div>
              <RuntimeConverter timeSpan={duration} />
            </div>
            <div className="seasons-episodes">
              {contentType !== "movie" && (
                <p>
                  {number_of_seasons > 1
                    ? `${number_of_seasons} seasons`
                    : `${number_of_seasons} season`}
                  / {number_of_episodes} episodes :
                  {in_production ? " in production" : "Finished"}
                </p>
              )}
            </div>
            <div className="creators"> {renderDirector()} </div>
          </div>
        </div>
        <div className="iframe-wrapper">
          {videos?.results?.length > 0 ? (
            <iframe
              src={`https://www.youtube.com/embed/${findTrailer.key}?controls=1&rel=0&iv_load_policy=3`}
              title="Embedded content"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />
          ) : (
            <p>
              <span style={{ fontSize: "25px" }}>🎥</span>Video currently not
              available.. 😒
            </p>
          )}
        </div>
        <Divider
          style={{
            borderColor: "#777d6b",
            opacity: "0.8",
          }}
          className="hero-divider"
        >
          Top Actors
        </Divider>
        <Swiper
          slidesPerView={6}
          className="actors-Swiper"
          navigation={true}
          modules={[Navigation]}
          pagination={true}
          centeredSlides={false}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1150: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="actors-container"> {topCastList()} </div>
        </Swiper>
        <div className="user-reviews wrapper">
          <Tabs defaultActiveKey="1" items={userReviews()} />
        </div>
        <Divider
          style={{
            borderColor: "#777d6b",
            opacity: "0.8",
          }}
          className="hero-divider"
        >
          You May Also Like
        </Divider>
        <Swiper
          slidesPerView={5}
          className="recommended-media-Swiper"
          navigation={true}
          modules={[Navigation]}
          pagination={true}
          centeredSlides={false}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
            },
            1150: {
              slidesPerView: 5,
            },
          }}
        >
          <div className="flex">{recommendedMedia()}</div>
        </Swiper>
      </StyledSingleMedia>
      <DrawerStyled
        title={selectedActor ? selectedActor.name : "Actor Details"}
        onClose={closeActorDrawer}
        open={drawerOpen}
        width={"auto"}
        loading={drawerLoading}
        footer={
          <h3>
            <a
              className="link-to-imdb"
              href={
                actorDetails.imdb_id
                  ? `https://www.imdb.com/name/${actorDetails.imdb_id}/`
                  : ""
              }
              target="_blank"
            >
              Link to imdb
            </a>
          </h3>
        }
        style={{ backgroundColor: "#d9d9d9" }}
        size="large"
      >
        {selectedActor && (
          <div className="drawer-actor-details">
            <img
              src={`${baseImgUrl.w300}${selectedActor.profile_path}`}
              alt={selectedActor.name}
            />
            <p>
              <span>Character:</span> {selectedActor.character}
            </p>

            <p>
              <span>Date of birth: </span> {actorDetails.birthday}
            </p>
            <p>
              {actorDetails.deathday && (
                <>
                  <span>Death Date:</span> {actorDetails.deathday}
                </>
              )}
            </p>
            <p className="actor-biography">
              {actorDetails.biography && (
                <>
                  <span>Biography : </span>
                  {actorDetails.biography.slice(0, 100)}...
                </>
              )}
            </p>
          </div>
        )}
      </DrawerStyled>
    </SecondaryLayout>
  );
};
export default SingleMedia;
