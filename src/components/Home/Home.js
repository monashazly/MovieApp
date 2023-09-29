import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchSeries } from "../../features/rtk/movies/movieSlice";
import "./Home.scss";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
  }, [dispatch]);

  return (
    <div>
      <div className="home-banner">
        <div className="search-contianer">
          <h1>Welcome.</h1>
          <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
          <input className="form-control mt-3 w-100" type="text"  placeholder="Search Movies"/>
        </div>
      </div>
      <MovieListing></MovieListing>
    </div>
  );
}

export default Home;
