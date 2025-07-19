import { useEffect, useState } from "react";
import { myApi } from "../../Helpers/BaseUrl/baseApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import baseImgUrl from "../../Helpers/BaseUrl/baseImage";
import { ActorsDetailsStyled, ActorStyledContainer } from "./styled";
import "swiper/css";
import "swiper/css/navigation";
import { Popover } from "antd";

const ActorsSlideShow = () => {
  const [actorsList, setActorsList] = useState([]);
  const [activePopover, setActivePopover] = useState(null);

  useEffect(() => {
    myApi
      .get(`/person/popular?page=${(Math.random() * 20 + 1).toFixed()}`)
      .then((res) => {
        setActorsList(res.data.results);
      })
      .catch((err) => {
        console.log("Api error: ", err);
      });
  }, []);

  const renderActorDetails = (known_for) => {
    return known_for.map(({ id, title, release_date }) => (
      <ActorsDetailsStyled key={id}>
        <Link
          to={`/contents/${release_date ? "movie" : "tv"}/${id}`}
          className="known-for-item"
        >
          <p>{title}</p>
        </Link>
      </ActorsDetailsStyled>
    ));
  };

  const renderActorSlides = () => {
    return actorsList.map(({ id, name, profile_path, known_for }) => {
    const isActive = activePopover === id;
      return (
        <SwiperSlide key={id}>
          <Link to={"/"}>
            <Popover
              content={renderActorDetails(known_for)}
              title={
                <span
                  style={{ color: "#daf58c" }}
                >{`${name} is known for:`}</span>
              }
              placement="top"
              color="rgba(0, 0, 0, 0.75)"
              trigger={"hover"}
              open={isActive}
              onOpenChange={(visible) => {
                setActivePopover(visible ? id : null);
              }}
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
      {actorsList.length > 0 && (
        <Swiper
          spaceBetween={30}
          slidesPerView={6}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={8000}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1150: {
              slidesPerView: 6,
            },
          }}
        >
          {renderActorSlides()}
        </Swiper>
      )}
    </ActorStyledContainer>
  );
};
export default ActorsSlideShow;
