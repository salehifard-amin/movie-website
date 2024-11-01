import { Link } from "react-router-dom";
import menuItemsArray from "../../Helpers/arrays/headerMenu";
import { HeaderStyled } from "./Styled";
import { Button, Popover } from "antd";
import NotificationDropdown from "../AuxiliaryComponents/NotificationDropdown";
import ProfileDropdown from "../AuxiliaryComponents/ProfileDropdown";
import SearchBox from "../AuxiliaryComponents/SearchBox";

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
      <HeaderStyled className="container flex justify-between align-center">
        <div className="left-menu flex justify-between align-center">
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
          <div class="hamburger-menu flex flex-column justify-between">
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
