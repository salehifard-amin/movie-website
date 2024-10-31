import ActorsSlideShow from "../../Components/ActorsSlideShow";
import HeroSlider from "../../Components/HeroSlider";
import MainLayout from "../../Components/Layouts/MainLayout";
import Subscribe from "../../Components/Subscribe";
import WatchListSuggestions from "../../Components/WatchListSuggestions";
import GlobalStyle from "../../GlobalStyles";

const HomePage = () => {
  return (
    <MainLayout>
        <GlobalStyle />
        <HeroSlider />
        <WatchListSuggestions category={"Top-Rated-Tv-Series"} apiAddress={"/tv/top_rated"} />
        <WatchListSuggestions category={"Top-Rated-Movies"} apiAddress={"/movie/top_rated"} />
        <WatchListSuggestions category={"On-The-Air-Series"} apiAddress={"/tv/on_the_air"} />
        <Subscribe />
        <ActorsSlideShow />
    </MainLayout>
  );
};
export default HomePage;
