import "./MovieCard.scss";
import { Link } from "react-router-dom";
import { imgBaseURL } from '../../common/apis/imgBaseURL'
import MovieRating from "../MovieRating/MovieRating"

function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="movie-card">
      <Link className="link-style" to={`/movie/${movie.id}`}>
        <div className="card-img-container">
          <img
            className="card-img"
            src={imgBaseURL + movie.poster_path}
            alt={movie.title}
          />
          <span className="card-rate">
            <MovieRating rate={movie.vote_average}></MovieRating>
          </span>
        </div>
        <div className="card-info">
          <h4 className="movie-title">
            {movie.title ? movie.title : movie.name}
          </h4>
          <p className="movie-date">
            {movie.release_date ? movie.release_date : movie.first_air_date}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
