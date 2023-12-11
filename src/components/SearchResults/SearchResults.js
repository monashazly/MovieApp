import { useLocation, useNavigate } from "react-router-dom";
import SearchCard from "../SearchCard/SearchCard";
import "./SearchResults.scss";
import SearchPersonCard from "../SearchPersonCard/SearchPersonCard";

const SearchResults = (props) => {
  const { searchResults } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const isMovieRoute = location.pathname.includes("movies");
  const isTvRoute = location.pathname.includes("tv");
  const isPersonRoute = location.pathname.includes("person");

  const movies = searchResults.filter(
    (result) => result.media_type === "movie"
  );
  const tv = searchResults.filter((result) => result.media_type === "tv");
  const person = searchResults.filter(
    (result) => result.media_type === "person"
  );

  const noResultRender = ((isMovieRoute && !movies.length) ||
    (isTvRoute && !tv.length) ||
    (isPersonRoute && !person.length)) && <h4>There's no results !</h4>;

  const forwardToDetailsView = (id , target) => {
    navigate(`/${target}/${id}`);
  };

  return (
    <>
      <div className="results-card-container">
        {isMovieRoute &&
          movies.map((movie) => (
            <div onClick={() => forwardToDetailsView(movie.id , 'movie')} key={movie.id}>
              <SearchCard result={movie} />
            </div>
          ))}
        {isTvRoute &&
          tv.map((item) => (
            <div key={item.id} onClick={() => forwardToDetailsView(item.id , 'tv')}>
              <SearchCard result={item} />
            </div>
          ))}
        {isPersonRoute &&
          person.map((p) => <SearchPersonCard actor={p} key={p.id} />)}
        {noResultRender}
      </div>
    </>
  );
};

export default SearchResults;
