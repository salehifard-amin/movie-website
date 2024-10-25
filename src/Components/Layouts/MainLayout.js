import Footer from "../Footer";
import Header from "../Header";
import { MainContainerStyled } from "./MainLayoutStyled";

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
