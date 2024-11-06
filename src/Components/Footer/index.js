import { Button, Popover } from "antd";
import { StyledFooter } from "./styled";
import { Link } from "react-router-dom";
import {
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import footerImagesArray from "../../Helpers/arrays/footerImages";
import MessageAntd from "../Headers/MessageAntd";

const Footer = () => {
  const renderFarm = () => {
    return footerImagesArray.map(({ image }, index) => {
      return (
        <span key={index}>
          <a href="/">
            <img src={image} alt="logo" />
          </a>
        </span>
      );
    });
  };

  const alert = () => {
    console.log("Button clicked!");
  };

  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-top flex justify-around align-center">
          <div className="top-left">
            <Link to={"/"}>
              <img src="/images/logo.png" alt="logo" />
            </Link>
            <p>
              Eiusmod tempor incididunt ut la abore et minim ven exerc itation
              ulla mco lboris naliquip ex ea comm.
            </p>
            <div className="logos">
              <a href="https://github.com/salehifard-amin" target="_blank">
                <GithubOutlined />
              </a>
              <a href="https://x.com" target="_blank">
                <TwitterOutlined />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <LinkedinOutlined />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <InstagramOutlined />
              </a>
            </div>
          </div>
          <ul className="top-right flex justify-between align-center">
            {renderFarm()}
          </ul>
        </div>
        <div className="footer-bottom flex justify-around align-center">
          <div className="bottom-left ">
            <p>Copyright ©2022 All rights reserved</p>
            <p>
              Developed by <strong>AMIN Salehi</strong>
            </p>
          </div>
          <div className="bottom-right flex justify-around align-center">
            <div className="login-text">
              <p>
                Already have an Account? <Link to={"/"}>LOGIN</Link>
              </p>
            </div>

            <MessageAntd>
              {(showAlert) => (
                <Button
                  type="primary"
                  onClick={showAlert}
                  danger
                  className="button"
                >
                  Become a Member
                </Button>
              )}
            </MessageAntd>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};
export default Footer;
