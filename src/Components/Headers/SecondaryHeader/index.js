import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { SecondHeaderStyled } from "./styled";
import MessageAntd from "../../AuxiliaryComponents/MessageAntd";
import HamburgerDrawer from "../../AuxiliaryComponents/HamburgerDrawer";

const SecondaryHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openHamburgerDrawer = () => {
    setDrawerOpen(true);
  };
  const closeHamburgerDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="header">
      <SecondHeaderStyled className="container flex justify-between align-center">
        <div className="left-menu flex justify-between align-center">
          <Link to="/" className="logo">
            <img src="/images/logo.png" />
          </Link>
        </div>
        <div className="right-menu flex justify-between align-center ">
          <div className="search-holder">
            <Link to={"/search"}>
              <SearchOutlined className="search-icon" />
            </Link>
            <div
              className="hamburger-menu flex flex-column justify-between"
              onClick={openHamburgerDrawer}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <HamburgerDrawer open={drawerOpen} onClose={closeHamburgerDrawer} />
          </div>
          <div className="pipe"></div>
          <MessageAntd>
            {(showAlert) => (
              <Button
                type="primary"
                onClick={showAlert}
                danger
                className="header-button"
              >
                Sign in
              </Button>
            )}
          </MessageAntd>
        </div>
      </SecondHeaderStyled>
    </div>
  );
};
export default SecondaryHeader;
