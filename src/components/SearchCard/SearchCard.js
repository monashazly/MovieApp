import { imgBaseURL } from "../../common/apis/imgBaseURL";
import "./SearchCard.scss";
import { HiOutlinePhoto } from "react-icons/hi2";

const SearchCard = (props) => {
  const { result } = props;

  return (
    <div className="search-card">
      <div className="search-card-poster">
        {result.poster_path ? (
          <img
            className="search-card-img"
            src={imgBaseURL + result.poster_path}
            alt="?"
          />
        ) : (
          <HiOutlinePhoto color="#b5b5b5" size={40} />
        )}
      </div>
      <div className="search-card-description">
        <h5>{result.name ? result.name : result.title}</h5>
        <span className="result-date">{result.release_date}</span>
        <p className="result-overview">{result.overview}</p>
      </div>
    </div>
  );
};

export default SearchCard;
