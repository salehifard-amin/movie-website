import Footer from "../../Footer";
import Header from "../../Headers/MainHeader";
import { MainContainerStyled } from "./styled";

const MainLayout = ({ children }) => {
  return (
    <MainContainerStyled>
      <Header />
      {children}
      <Footer />
    </MainContainerStyled>
  );
};
export default MainLayout;
