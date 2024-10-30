import { useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import GlobalStyle from "../../GlobalStyles";
import { Swiper } from "swiper/react";
import { MainContainerStyled, StyledSwiperSlide } from "./styled";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Autoplay, Navigation } from "swiper/modules";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const WatchListSuggestions = ({ category, apiAddress }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    if(!apiAddress){return;}
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
    return movieList.map(
      ({ title, poster_path, release_date, vote_average ,first_air_date , name }, index) => {
        return (
          <StyledSwiperSlide key={index}>
            <Link to={"/movie"}>
              <div className="watchList-item-container">
                <img
                  className="watchList-image"
                  src={`${baseImgUrl.original}${poster_path}`}
                  alt={title}
                />
                <div className="watchList-item-details">
                  <h3>{title? title : name}</h3>
                  <div>
                    <p className="release-date">{release_date? release_date.slice(0, 4) : first_air_date.slice(0, 4)}</p>
                  </div>
                  <div>
                    <span className="vote-title">TMDB votes: </span>
                    <span className="vote-average">
                      {Math.floor(vote_average * 10) / 10}
                    </span>
                  </div>
                </div>
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
      <GlobalStyle />
      <Link to={"movies"} className="list-category-title">
        <h2>{category.replace(/-/g , " ")}</h2>
      </Link>

      <div className="buttons-container">
        <button className={prevButtonClass}>
          <LeftCircleOutlined />
        </button>
        <button className={nextButtonClass}>
          <RightCircleOutlined />
        </button>
      </div>

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
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
      >
        {renderFarm()}
      </Swiper>
    </MainContainerStyled>
  );
};
export default WatchListSuggestions;