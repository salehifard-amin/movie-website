import { Link } from "react-router-dom";
import menuItemsArray from "../../../Helpers/arrays/headerMenu";
import { HeaderStyled } from "./Styled";
import { Button, Popover } from "antd";
import NotificationDropdown from "../../AuxiliaryComponents/NotificationDropdown";
import ProfileDropdown from "../../AuxiliaryComponents/ProfileDropdown";
import SearchBox from "../../AuxiliaryComponents/SearchBox";
import MessageAntd from "../MessageAntd";

const Header = () => {
  const renderFarm = () => {
    return menuItemsArray.map(({ title }) => {
      return (
        <Link to="/" key={title}>
          {title}
        </Link>
      );
    });
  };

  return (
    <div className="header">
      <HeaderStyled className="container flex justify-between " >
        <div className="left-menu flex justify-between ">
          <Link to="/" className="logo">
            <img src="./images/logo.png" />
          </Link>
          <div className="menu-items"> {renderFarm()} </div>
        </div>
        <div className="right-menu flex justify-between width-100">
          <div className="search-subscribe flex justify-between align-center">
            <SearchBox />
            <div className="pipe"></div>
            <NotificationDropdown />
            <div className="pipe"></div>
            <ProfileDropdown />
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
          <div className="hamburger-menu flex flex-column justify-between">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </HeaderStyled>
    </div>
  );
};
export default Header;
