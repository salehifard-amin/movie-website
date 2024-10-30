import { useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import GlobalStyle from "../../GlobalStyles";
import { ActorsDetailsStyled, ActorStyledContainer } from "./styled";
import "swiper/css";
import "swiper/css/navigation";
import { Popover } from "antd";

const ActorsSlideShow = () => {
  const [actorsList, setActorsList] = useState([]);

  useEffect(() => {
    myApi
      .get(`/person/popular?page=${(Math.random() * 50).toFixed()}`)
      .then((res) => {
        setActorsList(res.data.results);
      })
      .catch((err) => {
        console.log("Api error: ", err);
      });
  }, []);

  const renderActorDetails = (known_for) => {
    return known_for.map(({ title }) => (
      <ActorsDetailsStyled>
        <Link className="known-for-item" key={title}>
          <p>{title}</p>
        </Link>
      </ActorsDetailsStyled>
    ));
  };

  const renderActorSlides = () => {
    return actorsList.map(({ id, name, profile_path, known_for }) => {
      return (
        <SwiperSlide key={id}>
          <Link to={"/"}>
            <Popover
              content={renderActorDetails(known_for)}
              title={<span style={{ color: "#daf58c" }}>{`${name} is known for:`}</span>}
              placement="top"
              color="rgba(0, 0, 0, 0.75)"
            >
              <div className="actor-item">
                <img src={`${baseImgUrl.w185}${profile_path}`} alt={name} />
                <div className="actor-details">
                  <p>{name} </p>
                </div>
              </div>
            </Popover>
          </Link>
        </SwiperSlide>
      );
    });
  };
  return (
    <ActorStyledContainer>
      <GlobalStyle />
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        navigation
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        loop={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        // }}
        // speed={3000}
      >
        {renderActorSlides()}
      </Swiper>
    </ActorStyledContainer>
  );
};
export default ActorsSlideShow;
