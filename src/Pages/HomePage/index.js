import ActorsSlideShow from "../../Components/ActorsSlideShow";
import HeroSlider from "../../Components/HeroSlider";
import MainLayout from "../../Components/Layouts/MainLayout";
// import Subscribe from "../../Components/Subscribe";
import WatchListSuggestions from "../../Components/WatchListSuggestions";
import { message, Spin } from "antd";

const LazySubscribe = React.lazy(() => import("../../Components/Subscribe"));

const HomePage = () => {
  const [subscribeVisible, setSubscribeVisible] = useState(false);
  const subscribeRef = useRef(null);

  useEffect(() => {
    document.title = "STREAMO | Movies & Tv";
    const hasVisited = sessionStorage.getItem("userHasVisited");
    if (!hasVisited) {
      message.info("use VPN to load images", 6);
      sessionStorage.setItem("userHasVisited", "true");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSubscribeVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0, rootMargin: "250px" }
    );

    if (subscribeRef.current) {
      observer.observe(subscribeRef.current);
    }

    return () => {
      if (subscribeRef.current) {
        observer.unobserve(subscribeRef.current);
      }
    };
  }, []);
  return (
    <MainLayout>
      <HeroSlider />
      <WatchListSuggestions
        category={"Top-Rated-Tv-Series"}
        apiAddress={`/discover/tv?language=en-US&sort_by=vote_average.desc&vote_count.gte=4000 `}
      />
      <WatchListSuggestions
        category={"Top-Rated-Movies"}
        apiAddress={`/discover/movie?language=en-US&sort_by=vote_average.desc&vote_count.gte=8000&vote_average.gte=7 `}
      />
      <WatchListSuggestions
        category={"On-The-Air-Series"}
        apiAddress={`/discover/tv?vote_average.gte=7&language=en-US&sort_by=popularity.desc&first_air_date.lte=2025-01-01&first_air_date.gte=2022-01-01&vote_count.gte=400`}
      />

      <div
        ref={subscribeRef}
        style={{
          minHeight: "500px",
          background: "#f0f0f0",
          position: "relative",
        }}
      >
        {subscribeVisible && (
          <Suspense
            fallback={
              <Spin
                className="flex justify-center"
                style={{ position: "absolute", bottom: "50%", left: "50%" }}
                size="large"
              />
            }
          >
            <LazySubscribe />
          </Suspense>
        )}
      </div>

      <WatchListSuggestions
        category={"Old-Movies"}
        apiAddress={`/discover/movie?primary_release_date.lte=1970-01-01&vote_average.gte=7.3&vote_count.gte=1500`}
      />
      <ActorsSlideShow />
      <WatchListSuggestions
        category={"Animation"}
        apiAddress={`/discover/movie?vote_average.gte=7.5&vote_count.gte=1500&with_genres=16`}
      />
      <WatchListSuggestions
        category={"Documentary"}
        apiAddress={`/discover/movie?&vote_average.gte=7&vote_count.gte=700&with_genres=99`}
      />
    </MainLayout>
  );
};
export default HomePage;
