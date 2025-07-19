import { memo, useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import { Swiper } from "swiper/react";
import { MainContainerStyled, StyledSwiperSlide } from "./styled";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Autoplay, Navigation } from "swiper/modules";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import StarRating from "../AuxiliaryComponents/StarRating";

const WatchListSuggestions = ({ category, apiAddress }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (!apiAddress) return;
    myApi
      .get(apiAddress)
      .then((res) => {
        setMovieList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderFarm = () => {
    if (!movieList) return;
    return movieList.map(
      (
        {
          id,
          title,
          poster_path,
          release_date,
          vote_average,
          first_air_date,
          name,
        },
        index
      ) => {
        return (
          <StyledSwiperSlide key={index}>
            <Link to={`/contents/${release_date ? "movie" : "tv"}/${id}`}>
              <div className="watchList-item-container">
                <img
                  className="watchList-image"
                  src={`${baseImgUrl.w342}${poster_path}`}
                  alt={title}
                  loading="lazy"
                />
                <StarRating voteAverage={vote_average} />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                <div className="watchList-item-details">
                  <div>
                    <p className="release-date">
                      {release_date
                        ? release_date.slice(0, 4)
                        : first_air_date.slice(0, 4)}
                    </p>
                  </div>
                  <div>
                    <span className="vote-title">TMDB votes: </span>
                    <span className="vote-average">
                      {Math.floor(vote_average * 10) / 10}
                    </span>
                  </div>
                </div>
              </div>
              <div className="main-title">
                <h3>{title || name}</h3>
              </div>
            </Link>
          </StyledSwiperSlide>
        );
      }
    );
  };

  const prevButtonClass = `${category}-prev`;
  const nextButtonClass = `${category}-next`;

  return (
    <MainContainerStyled className="main-container">
      <Link to={"/"} className="list-category-title">
        <h2>{category.replace(/-/g, " ")}</h2>
      </Link>
      <div className="buttons-container">
        <button className={prevButtonClass}>
          <LeftCircleOutlined />
        </button>
        <button className={nextButtonClass}>
          <RightCircleOutlined />
        </button>
      </div>
      {movieList.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          navigation={{
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
            hideOnClick: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          centeredSlides={true}
          lazyPreloadPrevNext={0}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
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
          {renderFarm()}
        </Swiper>
      )}
    </MainContainerStyled>
  );
};
export default memo(WatchListSuggestions);
