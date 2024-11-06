import { useEffect, useState } from "react";
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

const HeroSlider = () => {
  const [trendList, setTrendList] = useState([]);
  const [genreState, setGenreState] = useState([]);
  const [backdropSize, setBackdropSize] = useState("original");

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setBackdropSize("w780");
    }  else {
      setBackdropSize("original");
    }
  }, []);
  useEffect(() => {
    myApi
      .get(`discover/movie?page=${((Math.random() * 9) +1).toFixed()}&vote_count.gte=8000`)
      .then((res) => {
        setTrendList(res.data.results);
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, []);

  useEffect(() => {
    myApi
      .get("/genre/movie/list")
      .then((res) => {
        setGenreState(res.data.genres);
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, []);

  const renderFarm = () => {
    return trendList.map(({ id, title, backdrop_path, genre_ids ,release_date }, index) => {
      const titleFontSize = title.length < 20 ? "70px" : "45px";
      return (
        <SwiperSlide key={index}>
          <HeroStyled $fontProps={titleFontSize}>
            <li>
              <img src={`${baseImgUrl[backdropSize]}${backdrop_path}`} alt="title" />
            </li>
            <li className="hero-title">
              <h2>{title}</h2>
              <span className="hero-genres">
                <GenreMaker genreId={genre_ids} genreState={genreState} />
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
    });
  };
  return (
    <HeroContainer>
      <Arrow>
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
      </Arrow>
    </HeroContainer>
  );
};
export default HeroSlider;
