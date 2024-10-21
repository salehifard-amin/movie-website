import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import GlobalStyle from "../../GlobalStyles";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { Arrow, HeroStyled } from "./styled";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import HeroGenreMaker from "../AuxiliaryComponents/HeroGenreMaker";
import { Button } from "antd";

const HeroSlider = () => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    myApi
      .get("/trending/movie/week")
      .then((res) => {
        setTrendList(res.data.results);
        console.log("result", res.data.results);
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
          <HeroStyled fontProps={titleFontSize}>
            <li>
              <img src={`${baseImgUrl.original}${backdrop_path}`} alt="title" />
            </li>
            <li className="hero-title">
              <h2>{title}</h2>
              <li className="hero-genres">
                <HeroGenreMaker genreId={genre_ids} />
                <Button className="watch-button" type="primary">
                  Watch Now
                </Button>
              </li>
            </li>
          </HeroStyled>
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="hero-container">
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
    </div>
  );
};
export default HeroSlider;
