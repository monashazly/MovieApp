import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux"
import {useParams , useLocation} from "react-router-dom"
import { imgBaseURL } from "../../common/apis/imgBaseURL";
import "./MovieBackdrop.scss";
import MovieRating from "../MovieRating/MovieRating";
import {fetchMovie} from "../../features/rtk/movies/movieSlice"

const MovieBackdrop = () => {

  const [releaseDate, setReleaseDate] = useState();
  const { TMDPID } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const movie = useSelector(state => state.movies.selectedMovie)
  
  const target = location.pathname.includes('movie') ? 'movie' : 'tv';


  useEffect(() => {

    dispatch(fetchMovie({ TMDPID, target }))

  }, [dispatch , TMDPID , target]);

  useEffect(() => {
    const dateString = movie?.release_date;
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    setReleaseDate(year);
  }, [movie]);

  return (
    <div
      className="backdrop"
      style={{ backgroundImage: `url(${imgBaseURL + movie?.backdrop_path})` }}
    >
      <div className="movie-content">
        <div className="movie-poster">
          <img
            className="poster"
            src={imgBaseURL + movie?.poster_path}
            alt={movie?.title}
          />
        </div>
        <div className="movie-info">
          <div className="movie-header">
            {" "}
            {movie?.title + `(${releaseDate})`}{" "}
          </div>
          <div className="genre">
            {movie?.genres?.map((genre, index) => (
              <span key={genre.id}>
                {genre.name +
                  " " +
                  (index !== movie.genres.length - 1 ? "," : "")}{" "}
              </span>
            ))}
          </div>
          <div className="rating">
            <MovieRating rate={movie?.vote_average}></MovieRating>
          </div>
          <div className="tagline">{movie?.tagline}</div>
          <h2>Overview</h2>
          <div className="overview">{movie?.overview}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieBackdrop;
