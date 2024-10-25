import styled from "styled-components";

const StyledFooter = styled.div`
  //temporary bg
  background-color: rgb(19, 21, 27);
  font-size: 14px;

  color: #fff;
  .top-left {
    width: 20vw;
  }
  .footer-top {
    padding: 45px 50px;
  }
  .footer-top .top-left .logos a {
    font-size: 28px;
    padding: 0 8px;
    transition: color 0.3s ease;
    &:nth-child(1){
        color: #7965ffb5;
        &:hover{
            color: #7965ff;
        }
    }
    &:nth-child(2){
        color: #34e43496;
        &:hover{
            color: #34e434;
        }
    }
    &:nth-child(3){
        color: #0025ff9e;
        &:hover{
            color: #0025ff;
        }
    }
    &:nth-child(4){
        color: #f419bf8c;
        &:hover{
            color: #f419bf;
        }
    }

  }
  .footer-top .top-right span {
    width: 175px;
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
  }
  .bottom-right {
    gap: 40px;
  }
  .bottom-right .login-text p a {
    font-weight: bold;
    transition: color 0.25s ease;
    &:hover {
      color: orange;
    }
  }
`;
export default StyledFooter;
