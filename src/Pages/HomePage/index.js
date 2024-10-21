import HeroSlider from "../../Components/HeroSlider";
import MainLayout from "../../Components/Layouts/MainLayout"
import GlobalStyle from "../../GlobalStyles";

const HomePage = () => {
    return(
        <MainLayout>
            <GlobalStyle/>
            <HeroSlider />
        </MainLayout>
    )
}
export default HomePage;