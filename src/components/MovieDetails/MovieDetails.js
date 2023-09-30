import MovieBackdrop from "../MovieBackdrop/MovieBackdrop"
import MovieCast from "../MovieCast/MovieCast";
import './MovieDetails.scss'

function MovieDetails() {
  return (
    <>
      <div className="backdrop">
        <MovieBackdrop></MovieBackdrop>
      </div>
      <div className="cast">
        <h2>Top billed cast</h2>
        <MovieCast></MovieCast>
      </div>
    </>
  );
}

export default MovieDetails;
