import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss"
import Loader from "../Loader/Loader";

const MovieListing = () => {
  const movies = useSelector((state) => state.movies.movies);
  const series = useSelector((state) => state.movies.series);
  let movieRender = '';
  let seriesRender = '';

  movieRender = movies.length ? (movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie}></MovieCard>
    ))) : <div className="loader-container"> <Loader></Loader> </div>
    seriesRender = series.length ? (series.map((serie) => (
      <MovieCard key={serie.id} movie={serie}></MovieCard>
    ))) : ''
  
  return (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container" >
            {movieRender}
          </div>
        </div>
        <div className="movie-list">
          <h2>Series</h2>
          <div className="movie-container" >
            {seriesRender}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
