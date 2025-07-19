import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Arrow, HeroContainer, HeroStyled } from "./styled";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import GenreMaker from "../AuxiliaryComponents/GenreMaker";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { fetchAndCacheGenres } from "../../Helpers/fetchGenres";
import { Helmet } from "react-helmet";

const determineBackdropSize = () => {
  if (window.innerWidth > 576 ) return "w780";
  if (window.innerWidth <= 576) return "w500";
};

const HeroSlider = () => {
  const [trendList, setTrendList] = useState([]);
  const [genreState, setGenreState] = useState([]);

  const backdropSize = determineBackdropSize();

  useEffect(() => {
    fetchAndCacheGenres(setGenreState);
    myApi
      .get(`discover/movie?&vote_count.gte=8000`)
      .then((res) => {
        setTrendList(res.data.results);
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, []);

  const genreMap = useMemo(()=>{
    return genreState.reduce((accumulator , genre)=>{
     accumulator[genre.id] = genre;
     return accumulator
    },{})
  },[genreState])

  const renderFarm = () => {
    return trendList.map(
      ({ id, title, backdrop_path, genre_ids, release_date }, index) => {
        return (
          <SwiperSlide key={index}>
            <HeroStyled $fontProps={title.length >= 20 ? "45px" : undefined}>
              <li>
                <img
                  src={`${baseImgUrl[backdropSize]}${backdrop_path}`}
                  alt={title}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </li>
              <li className="hero-title">
                <h2>{title}</h2>
                <span className="hero-genres">
                  <GenreMaker genreId={genre_ids} genreMap={genreMap} />
                  <Link to={`/contents/${release_date ? "movie" : "tv"}/${id}`}>
                    <Button className="watch-button" type="primary">
                      Watch Now
                    </Button>
                  </Link>
                </span>
              </li>
            </HeroStyled>
          </SwiperSlide>
        );
      }
    );
  };

  const firstImage =
    trendList.length > 0
      ? `${baseImgUrl[backdropSize]}${trendList[0].backdrop_path}`
      : null;

  return (
    <>
      {firstImage && (
        <Helmet>
          <link rel="preload" as="image" href={firstImage} />
        </Helmet>
      )}

      <HeroContainer>
        <Arrow>
          {trendList.length > 0 && (
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {renderFarm()}
            </Swiper>
          )}
        </Arrow>
      </HeroContainer>
    </>
  );
};
export default HeroSlider;
