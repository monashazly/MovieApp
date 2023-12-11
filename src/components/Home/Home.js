import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch} from "react-redux";
import { fetchMovies} from "../../features/rtk/movies/movieSlice";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");


  const searchMovie = () => {

    navigate(`/search/movies?query=${encodeURIComponent(searchQuery)}`);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyUp = (e) => {
      if (e.key === "Enter") {
        searchMovie();
      }
  }

  useEffect(() => {
    dispatch(fetchMovies('now_playing'));
    dispatch(fetchMovies('upcoming'));
    dispatch(fetchMovies('top_rated'));
  }, [dispatch]);

  return (
    <div>
      <div className="home-banner">
        <div className="search-contianer">
          <h1>Welcome.</h1>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
          <div className="input-container">
            <input
              className=" input-style"
              type="text"
              placeholder="Search Movies , Tv or Person ...."
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
            />
            <input type="submit" onClick={searchMovie} value="Search"/>
          </div>
        </div>
      </div>
      <MovieListing></MovieListing>
    </div>
  );
}

export default Home;
