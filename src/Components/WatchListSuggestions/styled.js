import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import { primaryTheme } from "../../GlobalStyles/themes";

const { small, medium } = primaryTheme.viewports;

export const MainContainerStyled = styled.div`
  width: 90%;
  position: relative;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  .list-category-title {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 15px;
    font-weight: 900;
    display: block;
  }
  .list-category-title:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    box-shadow: 0px 5px 4px #2e2e2eb3;
  }
  .list-category-title h2 {
    margin-top: 30px;
    margin-left: 10px;
    color: floralwhite;
    font-size: 22px;
    font-weight: 700;
    display: inline-block;
    text-shadow: 1px 1px 2px rgba(200, 200, 200, 0);
    transition: all 0.25s ease;
    &:hover {
      color: yellowgreen;
      text-shadow: 0px 0px 5px rgba(200, 200, 200, 0.3);
    }
    @media screen and (max-width: ${small}) {
      font-size: 16px;
    }
  }
  .buttons-container {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .buttons-container button {
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: none;
    padding: 12px;
    cursor: pointer;
    font-size: 30px;
    transition: color 0.25s ease;
    position: relative;
    top: auto;
    right: auto;
    &:hover {
      color: chartreuse;
    }
    @media screen and (max-width: ${small}) {
      font-size: 22px;
    }
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  :first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .watchList-item-container {
    position: relative;
    height: auto;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    padding: 2px 10px;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.045);
    }
    &:hover .watchList-image ~ .watchList-item-details {
      bottom: 0px;
    }
    @media screen and (max-width: ${small}) {
      margin-bottom: -5px;
      margin-top: 20px;
      /* width: 55%; */
      margin-left: auto;
      margin-right: auto;
    }
    @media screen and (orientation: landscape) and (max-width: ${medium}) {
      width: 50%;
    }
    .watchList-image {
      width: 100%;
      height: auto;
      min-height: 300px;
      border-radius: 12px;
      transition: all 0.25s ease;
      box-sizing: content-box;
      box-shadow: 4px 4px 5px -5px #544f49c2;
      @media screen and (max-width: ${small}) {
        /* width: 60%; */
        min-height: 200px;
      }
      @media screen and (orientation: landscape) and (max-width: ${medium}) {
        min-height: auto;
      }
    }
    .watchList-item-details {
      position: absolute;
      bottom: -300px;
      left: 0;
      width: 100%;
      color: #fff;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.007431) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.9) 100%
      );
      background-size: 93% 302%;
      background-position: 54% 50%;
      background-repeat: no-repeat;
      border-radius: 12px;
      border-top-right-radius: 50%;
      border-top-left-radius: 50%;
      padding-bottom: 5px;
      padding-left: 5px;
      padding-right: 5px;
      transition: bottom 0.5s ease;

      .release-date {
        font-size: 14px;
        margin: 20px 0 0 0;
        @media screen and (max-width: ${small}) {
          text-shadow: 1px 1px 1px black;
          text-shadow: 1px 2px 3px black;
        }
      }
      .vote-title {
        font-size: 12px;
        @media screen and (max-width: ${small}) {
          text-shadow: 1px 1px 1px black;
          text-shadow: 1px 2px 3px black;
        }
      }
      .vote-average {
        color: orange;
      }
    }
  }
  .main-title {
    text-align: center;
    h3 {
      padding-bottom: 10px;
      font-size: 16px;
      color: #fff;
      @media screen and (max-width: ${small}) {
        font-size: 16px;
        width: 50%;
        margin: 15px auto 0;
        text-shadow: 1px 1px 2px black;
        text-shadow: 1px 4px 8px black;
      }
      @media screen and (orientation: landscape) and (max-width: ${medium}) {
        font-size: 16px;
        padding: 0 50px;
      }
    }
  }
  @media screen and (max-height: 450px) , (max-width: ${small}) {
    &.swiper-slide-active .watchList-item-details {
      bottom: 0px;
    }
  }
`;
