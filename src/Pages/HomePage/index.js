import { useEffect } from "react";
import ActorsSlideShow from "../../Components/ActorsSlideShow";
import HeroSlider from "../../Components/HeroSlider";
import MainLayout from "../../Components/Layouts/MainLayout";
import Subscribe from "../../Components/Subscribe";
import WatchListSuggestions from "../../Components/WatchListSuggestions";

const HomePage = () => {
  useEffect(() => {
    document.title = "Streamo-Movies and Tv";
  },[])
  return (
    <MainLayout>
        <HeroSlider />
        <WatchListSuggestions category={"Top-Rated-Tv-Series"} apiAddress={`/discover/tv?page=${((Math.random() * 3) +1).toFixed()}&language=en-US&sort_by=vote_average.desc&vote_count.gte=4000 `} />
        <WatchListSuggestions category={"Top-Rated-Movies"} apiAddress={`/discover/movie?page=${((Math.random() * 16) +1).toFixed()}&language=en-US&sort_by=vote_average.desc&vote_count.gte=8000&vote_average.gte=7 `} />
        <WatchListSuggestions category={"On-The-Air-Series"} apiAddress={`/discover/tv?page=${((Math.random() * 3) +1).toFixed()}&vote_average.gte=7&language=en-US&sort_by=popularity.desc&first_air_date.lte=2025-01-01&first_air_date.gte=2022-01-01&vote_count.gte=400`} />
        <Subscribe />
        <WatchListSuggestions category={"Old-Movies"} apiAddress={`/discover/movie?page=${((Math.random() * 3) +1).toFixed()}&primary_release_date.lte=1970-01-01&vote_average.gte=7.3&vote_count.gte=1500`} />
        <ActorsSlideShow />
        <WatchListSuggestions category={"Animation"} apiAddress={`/discover/movie?page=${((Math.random() * 4) +1).toFixed()}&vote_average.gte=7.5&vote_count.gte=1500&with_genres=16`} />
        <WatchListSuggestions category={"Documentary"} apiAddress={`/discover/movie?&vote_average.gte=7&vote_count.gte=700&with_genres=99`} />
    </MainLayout>
  );
};
export default HomePage;
