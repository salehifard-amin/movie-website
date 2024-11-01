import ActorsSlideShow from "../../Components/ActorsSlideShow";
import HeroSlider from "../../Components/HeroSlider";
import MainLayout from "../../Components/Layouts/MainLayout";
import Subscribe from "../../Components/Subscribe";
import WatchListSuggestions from "../../Components/WatchListSuggestions";
import GlobalStyle from "../../GlobalStyles/GlobalStyles";

const HomePage = () => {
  return (
    <MainLayout>
        <GlobalStyle />
        <HeroSlider />
        <WatchListSuggestions category={"Top-Rated-Tv-Series"} apiAddress={`/tv/top_rated?page=${((Math.random() * 20) +1).toFixed()} `} />
        <WatchListSuggestions category={"Top-Rated-Movies"} apiAddress={`/movie/top_rated?page=${((Math.random() * 20) +1).toFixed()} `} />
        <WatchListSuggestions category={"On-The-Air-Series"} apiAddress={`/tv/on_the_air?page=${((Math.random() * 20) +1).toFixed()}`} />
        <Subscribe />
        <WatchListSuggestions category={"Old-Movies"} apiAddress={`/discover/movie?page=${((Math.random() * 3) +1).toFixed()}&primary_release_date.lte=1970-01-01&vote_average.gte=7.3&vote_count.gte=1500`} />
        <ActorsSlideShow />
        <WatchListSuggestions category={"Animation"} apiAddress={`/discover/movie?page=${((Math.random() * 4) +1).toFixed()}&vote_average.gte=7.5&vote_count.gte=1500&with_genres=16`} />
        <WatchListSuggestions category={"Documentary"} apiAddress={`/discover/movie?&vote_average.gte=7&vote_count.gte=700&with_genres=99`} />

    </MainLayout>
  );
};
export default HomePage;
