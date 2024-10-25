import { Button } from "antd";
import GlobalStyle from "../../GlobalStyles";
import StyledFooter from "./styled";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import footerImagesArray from "../../Helpers/arrays/footerImages";

const Footer = () => {
  const renderFarm = () => {
    return footerImagesArray.map(({ image } , index) => {
      return (
        <span key={index}>
          <Link to={"/"}>
            <img src={image} alt="logo" />
          </Link>
        </span>
      );
    });
  };

  return (
    <StyledFooter>
      <GlobalStyle />
      <div className="container">
        <div className="footer-top flex justify-around align-center">
          <div className="top-left">
            <Link to={"/"}>
              <img src="./images/logo.png" alt="" />
            </Link>
            <p>
              Eiusmod tempor incididunt ut la abore et minim ven exerc itation
              ulla mco lboris naliquip ex ea comm.
            </p>
            <div className="logos">
              <a href="https://www.facebook.com/">
                <FacebookOutlined />
              </a>
              <a href="https://x.com">
                <TwitterOutlined />
              </a>
              <a href="https://www.linkedin.com/feed/"> 
                <LinkedinOutlined />
              </a>
              <a href="https://www.instagram.com">
                <InstagramOutlined />
              </a>
            </div>
          </div>
          <ul className="top-right flex justify-between align-center">{renderFarm()}</ul>
        </div>
        <div className="footer-bottom flex justify-around align-center">
          <div className="bottom-left ">
            <p>Copyright ©2022 All rights reserved</p>
          </div>
          <div className="bottom-right flex justify-around align-center">
            <div className="login-text">
              <p>
                Already have an Account? <Link to={"/"}>LOGIN</Link>
              </p>
            </div>
            <Button type="primary" danger className="button">
              Become a Member
            </Button>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
