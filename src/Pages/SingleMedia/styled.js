import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
import { SwiperSlide } from "swiper/react";
const { small, medium, large, xLarge } = primaryTheme.viewports;
const { white, black, gray, red, orange, blue, green } = primaryTheme.colors;

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
  }
  .hero-contents {
    color: ${gray.normal};
    height: 65vh;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 150px;
    .main-title {
      font-size: ${({ $fontProps }) => $fontProps};
      font-weight: 700;
      max-width: 30vw;
      font-family: "Montserrat Alternates", serif;
      color: ${gray.lightest};
      @media screen and (max-width: ${small}) {
        font-size: 40px;
        font-weight: 700;
      }
    }
    .hero-details-container {
      margin-left: 15px;
      position: relative;
      p {
        font-size: 13px;
      }
      > :first-child {
        font-size: 25px;
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
          font-size: 65px;
          color: #8d641b;
          transition: color 0.4s ease;
          padding: 6px;
          &:hover {
            color: ${orange.normal};
            font-size: 67px;
          }
        }
      }
    }

    @media screen and (max-width: ${small}) {
      margin: 0;
      justify-content: center;
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
        -progress {
          color: #fff;
        }
      }

      .creators span {
        color: ${gray.silver};
      }
    }
    @media screen and (max-width: ${small}) {
      flex-direction: column;
      justify-content: space-around;
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
  .actors-Swiper {
    text-align: center;
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
