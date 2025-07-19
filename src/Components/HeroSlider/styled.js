import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const { small, medium, large, xLarge } = primaryTheme.viewports;

export const HeroContainer = styled.div`
  margin-bottom: 30px;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 380px;
  @media screen and (orientation: landscape) and (min-height: ${small}) {
  /* min-height: 800px; */
  }
`;

export const HeroStyled = styled.div`
  width: 100%;
  height: 75vh;
  font-family: "poppins";
  overflow: hidden;
  @media screen and (max-width: ${xLarge}) {
    height: 60vh;
  }
  @media screen and (max-width: ${large}) {
    height: 45vh;
  }
  @media screen and (orientation: landscape) {
    height: 75vh;
  }
  li img {
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: 0 -100px;
    @media screen and (max-width: ${small}) {
      min-height: 320px;
      object-position: center;
    }
    @media screen and (orientation: landscape) {
      object-position: 0 -50px;
    }
  }
  .hero-title {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 12%;
    left: 8%;
    color: #eaeadd;
    margin-top: 4%;
    width: 90%;
    padding: 0 28px 0 5px;
    min-height: 140px;
    @media screen and (max-width: ${small}) {
      top: 10%;
    }
    @media screen and (orientation: landscape) and (max-width: ${small}) {
      top: 0;
    }
  }
  .hero-title h2 {
    font-size: ${({ $fontProps }) => $fontProps || "70px"};
    text-shadow: 1px 2px 6px black;
    @media screen and (max-width: ${large}) {
      font-size: 45px;
    }
    @media screen and (max-width: ${medium}) {
      font-size: 24px;
    }
  }
  .hero-genres {
    position: absolute;
    top: 90%;
    left: 10px;
    font-size: 20px;
    color: #fff;
    width: 100%;
    height: auto;
    color: aliceblue;
    @media screen and (max-width: ${small}) {
      left: 5px;
    }
  }
  .hero-genres .movie-genres span {
    text-shadow: 1px 1px 3px black;
    @media screen and (max-width: ${small}) {
      font-size: 11px;
    }
  }
  .watch-button {
    position: absolute;
    top: 90%;
    left: 0%;
    font-size: 28px;
    font-weight: bold;
    padding: 25px 7px;
    box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 1);
    }
    @media screen and (max-width: ${medium}) {
      font-size: 20px;
    }
    @media screen and (max-width: ${small}) {
      font-size: 16px;
    }
  }
`;

export const Arrow = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: content-box;
    padding: 10px;
    @media screen and (max-width: ${large}) {
      display: none;
    }
  }
`;
