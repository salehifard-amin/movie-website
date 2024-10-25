import styled from "styled-components";
import { SwiperSlide } from "swiper/react";

export const MainContainerStyled = styled.div`
  width: 100%;
  position: relative;
  max-width: 1250px;
  margin-left: auto;
  margin-right: auto;
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
    box-shadow:  0px 5px 4px #2e2e2eb3;
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
    &:hover{
      color: yellowgreen;
    text-shadow: 0px 0px 10px rgba(200, 200, 200, 1);

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
  }
  .custom-prev,
  .custom-next {
    
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  .watchList-item-container {
    position: relative;
    width: 210px;
    height: auto;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    transition: transform 0.25s ease;
    &:hover {

      transform: scale(1.045);
    }
    &:hover .watchList-image ~ .watchList-item-details {
      bottom:0px;
    }
  }
  .watchList-image {
    width: 100%;
    height: auto;
    min-height: 315px;
    border-radius: 12px;
    transition: all 0.25s ease;
    box-sizing: content-box;
    box-shadow: 4px 4px 5px -5px #544f49c2;
  }
  .watchList-item-details {
    position: absolute;
    bottom: -300px;
    left: 0;
    width: 100%;
    color: #fff;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0074308473389356) 0%,
      rgba(0, 0, 0, 0.6910736169467787) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    border-radius: 12px;
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
    padding-top: 70px;
    padding-bottom: 35px;
    padding-left: 5px;
    padding-right: 5px;
    transition: bottom 0.5s ease;
    h3 {
      border-bottom: 3px solid #ffffff12;
      padding-bottom: 10px;
      font-size: 20px;
    }
    .release-date {
      font-size: 14px;
      margin: 20px 0 0 0;
    }
    .vote-title {
      font-size: 12px;
    }
    .vote-average {
      color: orange;
    }
  }
`;

export const Arrow = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: content-box;
    padding: 10px;
  }
`;
