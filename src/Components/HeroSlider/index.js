import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GlobalStyle from "../../GlobalStyles";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Arrow, Her0Container, HeroStyled } from "./styled";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import GenreMaker from "../AuxiliaryComponents/GenreMaker";
import { Button } from "antd";

const HeroSlider = () => {
  const [trendList, setTrendList] = useState([]);
  const [ genreState , setGenreState ] = useState([]) 

  useEffect(() => {
    myApi
      .get("/movie/now_playing")
      .then((res) => {
        setTrendList(res.data.results);
        console.log("result", res.data.results);
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, []);
  //API call for genres lists,it's passed to GenreMaker comp
  useEffect(() => {
    myApi
      .get("/genre/movie/list")
      .then((res) => {
        setGenreState(res.data.genres);
        console.log('genreApi:', res.data.genres );
      })
      .catch((er) => {
        console.log("Error is:", er);
      });
  }, []);

  const renderFarm = () => {

    return trendList.map(({ title, backdrop_path, genre_ids }, index) => {
    const titleFontSize = title.length < 20 ? "70px" : "45px";
      return (
        <SwiperSlide key={index}>
          <HeroStyled $fontProps={titleFontSize}>
            <li>
              <img src={`${baseImgUrl.original}${backdrop_path}`} alt="title" />
            </li>
            <li className="hero-title">
              <h2>{title}</h2>
              <span className="hero-genres">
                <GenreMaker genreId={genre_ids} genreState={genreState} />
                <Button className="watch-button" type="primary">
                  Watch Now
                </Button>
              </span>
            </li>
          </HeroStyled>
        </SwiperSlide>
      );
    });
  };
  return (
    <Her0Container>
      <GlobalStyle />
      <Arrow>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
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
      </Arrow>
    </Her0Container>
  );
};
export default HeroSlider;
