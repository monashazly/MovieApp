import "./MovieRating.scss"

const MovieRating = (props) => {
    const {rate} = props

    return (
        <span className="movie-rating">{ parseInt(rate * 10)}%</span>
    );
};

export default MovieRating;