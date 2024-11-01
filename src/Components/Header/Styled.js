import styled from "styled-components";
import { primaryTheme } from "../../GlobalStyles/themes";
const {small, medium, large} = primaryTheme.viewports;

export const HeaderStyled = styled.div`
  color: ${primaryTheme.colors.white};
  background-color: ${primaryTheme.colors.black};
  @media screen and (max-width: ${medium}) {
    flex-direction: column;
    align-items: start;
    .left-menu .logo {
      margin-left: 30px;
    }
    .header-button {
      font-size: 12px;
      @media screen and (max-width:${small}){
        width: 45px;
        font-size: 12px;
      }
    }
  }
  .left-menu {
    width: 42%;
  }
  .left-menu .logo {
    padding-top: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: ${medium}) {
      margin-left: 65px;
      padding-bottom: 10px;
    }
    @media screen and (max-width: ${small}) {
      width: 100px;
      margin-left: 10px;
      padding-bottom: 0px;
    }
  }
  .left-menu .logo img {
    width: 100%;
  }
  .left-menu .menu-items a {
    padding: 0 7px;
    font-size: 14px;
    transition: color 0.25s ease;
    &:hover {
      color: ${primaryTheme.colors.green.light};
    }
  }
  .right-menu {
    @media screen and  (min-width:${medium} ){
      width: auto;
    }
    @media screen and (max-width:${medium}){
      padding: 0 20px;
      
    }
  }
  .right-menu .search-subscribe {
    margin-right: 70px;
    @media screen and (max-width:${small}){
      margin-right: 0px;
      
    }
  }
  .right-menu .search-subscribe .pipe {
    width: 3px;
    height: 20px;
    background-color: ${primaryTheme.colors.white};
    display: inline-block;
  }
  .right-menu .hamburger-menu {
    display: none;
    width: 30px;
    height: 18px;
    cursor: pointer;
    span {
      background-color: rgb(255, 255, 255);
      width: 100%;
      height: 2px;
    }
    @media screen and (max-width:${medium}){
      display: flex;
      
    }
  }
  @media screen and (max-width: ${large}) {
    .left-menu .menu-items {
      display: none;
    }
  }
`;
