import Footer from "../../Footer";
import SecondaryHeader from "../../Headers/SecondaryHeader";
import { MainContainerStyled } from "./styled";

const SecondaryLayout = ({ children }) => {
  return (
    <MainContainerStyled>
      <SecondaryHeader />
      {children}
      <Footer />
    </MainContainerStyled>
  );
};
export default SecondaryLayout;

