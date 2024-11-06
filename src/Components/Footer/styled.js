import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const { small, medium, large, xLarge } = primaryTheme.viewports;
export const StyledFooter = styled.div`
  background-color: rgb(19, 21, 27);
  font-size: 14px;
  margin-top: 70px;
  color: #fff;

  .footer-top {
    padding: 45px 50px;
    .top-left {
      width: 20vw;
      text-align: center;
      @media screen and (max-width: ${large}) {
        width: 50%;
      }
      @media screen and (max-width: ${small}) {
        width: 100%;
      }
    }
    @media screen and (max-width: ${xLarge}) {
      flex-direction: column;
    }
  }
  .footer-top .top-left .logos a {
    font-size: 28px;
    padding: 0 8px;
    transition: color 0.3s ease;
    &:nth-child(1) {
      color: #7965ffb5;
      &:hover {
        color: #7965ff;
      }
    }
    &:nth-child(2) {
      color: #34e43496;
      &:hover {
        color: #34e434;
      }
    }
    &:nth-child(3) {
      color: #0025ff9e;
      &:hover {
        color: #0025ff;
      }
    }
    &:nth-child(4) {
      color: #f419bf8c;
      &:hover {
        color: #f419bf;
      }
    }
  }
  .footer-top .top-right span {
    width: 10vw;
    @media screen and (max-width: ${small}) {
      display: none;
    }
  }
  .footer-top .top-right a {
    margin-right: -20px;
    margin-left: -20px;
    padding: 20px;
    display: block;
    transition: padding 0.3s ease;
    &:hover {
      padding: 0px;
    }
  }
  .footer-top .top-right a img {
    width: 100%;
    height: auto;
  }
  .footer-bottom {
    border-top: 2px solid #8080804a;
    box-shadow: 0px -3px 2px rgba(0, 0, 0, 0.4);
    padding: 8px 0;
    text-align: center;
    @media screen and (max-width: ${medium}) {
      flex-direction: column-reverse;
    }
  }
  .bottom-right {
    gap: 40px;
    padding-right: 12px;
    .button {
      width: 130px;
    }
  }
  .bottom-right .login-text p a {
    font-weight: bold;
    transition: color 0.25s ease;
    &:hover {
      color: orange;
    }
  }
`;
