import { Link } from "react-router-dom";
import GlobalStyle from "../../GlobalStyles";
import menuItemsArray from "../../Helpers/arrays/headerMenu";
import { HeaderStyled } from "./Styled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import NotificationDropdown from "../AuxiliaryComponents/NotificationDropdown";
import ProfileDropdown from "../AuxiliaryComponents/ProfileDropdown";
import SearchBox from "../AuxiliaryComponents/SearchBox"; 

const Header = ()=> {
  const renderFarm = () => {
    return menuItemsArray.map(({ title }) => {
      return <Link to="/" key={title}> {title} </Link>;
    });
  };

  return (
    <div className="header">
      <GlobalStyle />
      <HeaderStyled className="container flex justify-between align-center">
        <div className="menu flex justify-between align-center">
          <Link to="/" className="logo">
            <img src="./images/logo.png" />
          </Link>
          <div className="menu-items"> {renderFarm()} </div>
        </div>
        <div className="search-subscribe flex justify-between align-center">
          <SearchBox />
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-icon" /> */}
          <div className="pipe"></div>
          <NotificationDropdown />
          <div className="pipe"></div>
          {/* <FontAwesomeIcon icon={faUser} className="fa-icon" /> */}
          <ProfileDropdown />
          <Button type="primary" danger>
            Subscribe Now
          </Button>
        </div>
      </HeaderStyled>
    </div>
  );
}
export default  Header;