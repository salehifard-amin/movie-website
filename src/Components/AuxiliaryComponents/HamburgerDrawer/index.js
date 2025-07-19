import { Link } from "react-router-dom";
import { DrawerStyled } from "./styled";

const HamburgerDrawer = ( {open , onClose}) => {

  return (
    <DrawerStyled
      title="Menu"
      open={open}
      onClose={onClose}
      width={"40vw"}
      footer={<p className="drawer-footer">React SPA</p>}
    >
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/movies"}>Movies</Link>
        </li>
        <li>
          <Link to={"/series"}>Series</Link>
        </li>
        <li>
          <Link to={"/search"}>Search</Link>
        </li>
      </ul>
    </DrawerStyled>
  );
};
export default HamburgerDrawer;
