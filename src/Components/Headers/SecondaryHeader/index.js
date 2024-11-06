import { SearchOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { Link } from "react-router-dom";
import { SecondHeaderStyled } from "./styled";

const SecondaryHeader = () => {
  return (
    <div className="header">
      <SecondHeaderStyled className="container flex justify-between align-center">
        <div className="left-menu flex justify-between align-center">
          <Link to="/" className="logo">
            <img src="/images/logo.png" />
          </Link>
        </div>
        <div className="right-menu flex justify-between ">
          <div className="search-subscribe flex justify-between align-center">
            <SearchOutlined className="search-icon" />
            <div className="pipe"></div>
            <Popover
              content={
                <strong style={{ color: "#950000", fontSize: "12px" }}>
                  This is Demo version
                </strong>
              }
              trigger={"click"}
            >
              <Button className="header-button" type="primary" danger>
                Sign In
              </Button>
            </Popover>
          </div>
          <div className="hamburger-menu flex flex-column justify-between">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </SecondHeaderStyled>
    </div>
  );
};
export default SecondaryHeader;
