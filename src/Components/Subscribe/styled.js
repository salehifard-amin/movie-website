import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const { small, medium, large } = primaryTheme.viewports;

export const SubscribeStyled = styled.div`
  height: 75vh;
  max-height: 610px;
  background-image: url("/images/slider-hm4-4.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: ${small}) {
    background-position: 57% 0;
  }
  .subscribe-container {
    position: absolute;
    top: 20%;
    left: 8%;
    width: 100%;
    @media screen and (max-width: ${small}) {
      left: 0;
      padding: 0 10px;
    }
    .heading {
      font-size: 80px;
      font-weight: 900;
      text-shadow: 3px 10px 5px black, 5px 15px 10px #000000de,
        5px 15px 20px #0000009e;
      @media screen and (max-width: ${large}) {
        display: inline-block;
        padding-right: 50px;
      }
      @media screen and (max-width: ${medium}) {
        font-size: 70px;
      }
      @media screen and (max-width: ${small}) {
        font-size: 50px;
      }
      @media screen and (orientation: landscape) {
        font-size: 55px;
        display: block;
      }
    }
    .bg-layer {
      background-color: rgba(0, 0, 0, 0.3);
      display: inline-block;
      border-radius: 15px;
      .price-holder h2 {
        margin: 10px 15px;
        font-size: 40px;
        font-weight: 700;
        @media screen and (max-width: ${small}) {
          font-size: 22px;
        }
        @media screen and (orientation: landscape) {
          font-size: 22px;
        }
      }
      .price-holder .price-lined {
        color: red;
        text-decoration: line-through;
      }
    }
  }

  .button {
    display: block;
    margin-top: 50px;
    font-size: 25px;
    font-weight: bold;
    height: auto;
    @media screen and (max-width: ${small}) {
          font-size: 20px;
    margin-top: 20px;

        }
    @media screen and (orientation: landscape) {
        margin-top: 10px;
        
      }
  }
`;
