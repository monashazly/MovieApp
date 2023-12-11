import { imgBaseURL } from "../../common/apis/imgBaseURL";
import "./SearchPersonCard.scss";
import { IoIosPerson } from "react-icons/io";

const SearchPersonCard = (props) => {
  const { actor } = props;

  return (
    <div className="d-flex justify-content-start gap-3">
      <div className="actor-poster">
        {actor.profile_path ? (
          <img
            className="actor-img"
            alt="?"
            src={imgBaseURL + actor.profile_path}
          />
        ) : (
          <IoIosPerson color="#b5b5b5" size={35} className="m-auto" />
        )}
      </div>
      <div className="actor-overview">
        <h5>{actor.name}</h5>
        <span> {actor.known_for_department} . <span>
        {actor.known_for.map( (work,index) => <span className="actor-known-for" key={work.id}>{work.title ? work.title : work.name}{index !== actor.known_for.length-1 && ' ,'}</span>)} 
        .</span></span> 
      </div>
    </div>
  );
};

export default SearchPersonCard;
