import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
import { SwiperSlide } from "swiper/react";
import { Drawer } from "antd";
import "../../GlobalStyles/fonts/montserrat.css";

const { small, medium } = primaryTheme.viewports;
const { gray, orange, blue, green } = primaryTheme.colors;

export const StyledSingleMedia = styled.div`
  position: relative;
  padding: 65px 40px;
  color: #fff;
  @media screen and (max-width: ${small}) {
    padding: 50px 10px;
  }
  p {
    margin: 0;
    padding: 0;
  }

  .backdrop-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 700px;
    z-index: -5;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img.backdrop {
      width: 100%;
      height: auto;
      object-fit: cover;
      position: fixed;
      top: 0;
      left: 0;
    }
    .ant-skeleton .ant-skeleton-image .ant-skeleton-image-svg {
      width: 50vw;
      height: auto;
      max-height: 100vh;
    }

    .blur {
      @media screen and (min-width: ${medium}) {
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        backdrop-filter: blur(12px);
      }
    }
  }
  .hero {
    display: flex;
    height: 65vh;
    align-items: end;
    .poster {
      width: auto;
      height: auto;
      border-radius: 5px;
      @media screen and (max-width: ${medium}) {
        display: none;
      }
    }

    .hero-contents {
      color: ${gray.normal};
      display: flex;
      flex-direction: column;
      margin-bottom: 15px;
      @media screen and (max-width: ${small}) {
        height: 65vh;
        min-height: 400px;
        justify-content: flex-end;
      }

      .main-title {
        font-size: ${({ $fontProps }) => $fontProps};
        font-weight: 700;
        max-width: 30vw;
        font-family: "Montserrat Alternates", sans-serif;
        margin-left: 10px;
        color: ${gray.lightest};
        @media screen and (max-width: ${small}) {
          font-size: ${({ $fontProps }) =>
            $fontProps == "70px" ? "35px" : $fontProps};
          font-weight: 700;
          text-shadow: 1px 1px 4px #000;
        }
      }
      .hero-details-container {
        margin-left: 10px;
        position: relative;

        p {
          font-size: 13px;
        }
        > :first-child {
          font-size: 20px;
          @media screen and (max-width: ${small}) {
            font-size: 18px;
          }
        }
        .creators p span {
          color: ${gray.silver};
        }
        .play-button {
          background-color: transparent;
          border: none;
          margin-left: 18px;
          margin-top: 25px;
          height: 80px;
          .anticon-play-circle {
            font-size: 50px;
            color: #8d641b;
            transition: all 0.4s ease;
            padding: 6px;
            &:hover {
               color: ${orange.normal};
              /* font-size: 52px;  */
            }
          }
        }
      }

      @media screen and (max-width: ${small}) {
        margin: 0;
        /* justify-content: center; */
        text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.7);
      }
    }
  }
  .hero-divider {
    color: #fff;
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    margin-top: 50px;
    margin-bottom: 80px;
    .left-details {
      width: 50%;
      height: auto;
      padding: 0 50px;
      @media screen and (max-width: ${small}) {
        width: 100%;
        margin: 0 0 40px 0;
        padding: 0 20px;
        text-align: center;
      }
    }
    .right-details {
      margin-left: 70px;
      .duration {
        margin-bottom: 10px;
        .duration-text {
          color: ${gray.silver};
          font-size: 15px;
        }
      }
      .seasons-episodes {
        margin-bottom: 10px;
      }
      .rating {
        margin-bottom: 12px;

        span {
          color: ${gray.light};
          font-size: 15px;
        }
        /* .rating-progress {
          color: black;
        } */
      }
      .creators span {
        color: ${gray.silver};
        @media screen and (max-width: ${small}) {
          text-shadow: none;
          text-align: center;
          margin-left: 0;
        }
      }
    }
    @media screen and (max-width: ${small}) {
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .iframe-wrapper {
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: 100px auto;
    aspect-ratio: 16 / 9;
    iframe {
    border-radius: 5px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
    p{
      text-align: center;
      border: 0.5px solid rgba(64, 64, 62, 0.5);
      padding: 60px 0;
      background-color: rgba(197, 197, 197, 0.06);
    border-radius: 5px;
    }
  }
  .actors-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    align-items: center;
  }
  .bottom-divider {
    /* display: none; */
    color: ${gray.normal};
  }

  .actors-Swiper {
    text-align: center;
    margin-top: -60px;
  }
  .background-wrapper {
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -6;
  }
  .user-reviews {
    margin-top: 50px;
    margin-bottom: 80px;
    padding: 10px 100px;
    max-width: 950px;
    height: 200px;
    .review-item {
      color: ${gray.light};
      span {
        a {
          color: ${gray.silver};
          font-size: 16px;
          text-decoration: underline;
          &:hover {
            color: ${green.light};
          }
        }
      }
    }
    .ant-tabs-tab-btn {
      color: ${gray.silver};
    }
    @media screen and (max-width: ${small}) {
      margin-top: 30px;
      margin-bottom: 50px;
      padding: 10px 20px;
      height: auto;
    }
  }
  .recommend-card-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const SwiperSlideStyled = styled(SwiperSlide)`
  margin-top: 80px;
  margin-bottom: 80px;
  .actor-item {
    width: 100%;
    text-align: center;
    cursor: pointer;
    img {
      width: 50%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0.5px 2px 5px black;
    }
    .actor-character {
      font-size: 14px;
      color: ${gray.silver};
    }
  }
`;

export const DrawerStyled = styled(Drawer)`
  .link-to-imdb {
    color: ${blue.pure};
  }
  .drawer-actor-details {
    img {
      border-radius: 15px;
      max-width: 220px;
    }
    span {
      color: ${gray.darkest};
    }
    .actor-biography {
      max-width: 250px;
      width: 100%;
    }
  }
`;
