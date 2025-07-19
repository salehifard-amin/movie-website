import { myApi } from "../BaseUrl/baseApi";

export const fetchAndCacheGenres = async (setGenreState) => {
  const cachedMovie = JSON.parse(localStorage.getItem("movieGenres"));
  const cachedTv    = JSON.parse(localStorage.getItem("tvGenres"));

  if (cachedMovie && cachedTv) {
    setGenreState(cachedMovie);
  } else {
    try {
      const [movieRes, tvRes] = await Promise.all([
        myApi.get("/genre/movie/list"),
        myApi.get("/genre/tv/list"),
      ]);

      const movieGenres = movieRes.data.genres;
      const tvGenres    = tvRes.data.genres;

      setGenreState(movieGenres);

      localStorage.setItem("movieGenres", JSON.stringify(movieGenres));
      localStorage.setItem("tvGenres", JSON.stringify(tvGenres));
    } catch (err) {
      console.error("Failed to fetch genres:", err);
    }
  }
};

