import styled from "styled-components";
import { primaryTheme } from "../../../GlobalStyles/themes";
const { small, medium, large } = primaryTheme.viewports;

export const SecondHeaderStyled = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  .left-menu {
    padding: 15px 20px;
    .logo {
      @media screen and (max-width: ${small}) {
        width: 100px;
        margin-left: 10px;
        padding-bottom: 0px;
      }
      img {
        width: 100%;
      }
    }
  }
  .right-menu {
    @media screen and (min-width: ${medium}) {
      width: auto;
    }
    @media screen and (max-width: ${medium}) {
      padding: 0 20px;
    }
    .search-subscribe {
      margin-right: 30px;
      width: 8vw;
      @media screen and (max-width: ${small}) {
        margin-right: 0px;
      }
      .search-icon {
        font-size: 30px;
        color: #fff;
      }
      .pipe {
        width: 2px;
        opacity: 0.6;
        height: 20px;
        background-color: ${primaryTheme.colors.white};
        display: inline-block;
      }
    }
    .header-button {
      font-size: 12px;
      @media screen and (max-width: ${small}) {
        width: 45px;
        font-size: 12px;
      }
    }
    .hamburger-menu {
      display: none;
      width: 30px;
      height: 18px;
      cursor: pointer;
      span {
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 2px;
      }
      @media screen and (max-width: ${medium}) {
        display: flex;
      }
    }
  }
`;