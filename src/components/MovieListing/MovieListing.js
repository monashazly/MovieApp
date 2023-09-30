import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"
import Loader from "../Loader/Loader";

const MovieListing = () => {
  const nowPlaying = useSelector((state) => state.movies.now_playing);
  const upcoming = useSelector((state) => state.movies.upcoming);
  const topRated = useSelector((state) => state.movies.top_rated);

  let nowPlayingRender = '';
  let upcomingRender = '';
  let topRatedRender = '';

  nowPlayingRender = nowPlaying.length ? (nowPlaying.map((movie) => (
    <MovieCard key={movie.id} movie={movie}></MovieCard>
    ))) : <div className="loader-container"> <Loader></Loader> </div>
    upcomingRender = upcoming.length ? (upcoming.map((movie) => (
    <MovieCard key={movie.id} movie={movie}></MovieCard>
    ))) : <div className="loader-container"> <Loader></Loader> </div>
    topRatedRender = topRated.length ? (topRated.map((movie) => (
    <MovieCard key={movie.id} movie={movie}></MovieCard>
    ))) : <div className="loader-container"> <Loader></Loader> </div>
  return (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Now playing</h2>
          <div className="movie-container" >
            {nowPlayingRender}
          </div>
        </div>
        <div className="movie-list">
          <h2>Upcoming</h2>
          <div className="movie-container" >
            {upcomingRender}
          </div>
        </div>
        <div className="movie-list">
          <h2>Top rated</h2>
          <div className="movie-container" >
            {topRatedRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
