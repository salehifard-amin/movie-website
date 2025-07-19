import { Link } from "react-router-dom";
import menuItemsArray from "../../../Helpers/arrays/headerMenu";
import { HeaderStyled } from "./Styled";
import { Button } from "antd";
import NotificationDropdown from "../../AuxiliaryComponents/NotificationDropdown";
import ProfileDropdown from "../../AuxiliaryComponents/ProfileDropdown";
import SearchBox from "../../AuxiliaryComponents/SearchBox";
import MessageAntd from "../../AuxiliaryComponents/MessageAntd";
import { useState } from "react";
import HamburgerDrawer from "../../AuxiliaryComponents/HamburgerDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderFarm = () => {
    return menuItemsArray.map(({ title , path }) => {
      return (
        <Link to={path} key={title}>
          {title}
        </Link>
      );
    });
  };

  const openHamburgerDrawer = () => {
    setDrawerOpen(true);
  };
  const closeHamburgerDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="header">
      <HeaderStyled className="container flex justify-between ">
        <div className="left-menu flex justify-between ">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="logo"/>
          </Link>
          <div className="menu-items"> {renderFarm()} </div>
        </div>
        <div className="right-menu flex justify-between width-100">
          <div className="search-subscribe flex justify-between align-center">
            <SearchBox />
            <div className="pipe"></div>
            <NotificationDropdown className="hide-notif-drop-down" />
            <div className="pipe"></div>
            <ProfileDropdown className="hide-profile-drop-down" />
            <MessageAntd>
              {(showAlert) => (
                <Button
                  type="primary"
                  onClick={showAlert}
                  danger
                  className="button"
                >
                  Sign in
                </Button>
              )}
            </MessageAntd>
          </div>
          <div
            className="hamburger-menu flex flex-column justify-between"
            onClick={openHamburgerDrawer}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <HamburgerDrawer open = {drawerOpen} onClose={closeHamburgerDrawer} />
        </div>
      </HeaderStyled>
    </div>
  );
};
export default Header;
