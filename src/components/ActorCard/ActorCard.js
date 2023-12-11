import './ActorCard.scss'
import { imgBaseURL } from "../../common/apis/imgBaseURL";
import { IoIosPerson } from "react-icons/io";

const ActorCard = (props) => {
    const { actor } = props 

    return (
        <div className='actor-card'>
            <div className='img-container'>
               {actor.profile_path ? <img className='actor-profile' src={ imgBaseURL + actor.profile_path } alt={ actor.name} /> : <IoIosPerson color="#b5b5b5" size={50} className="m-auto" />}
            </div>
            <div className='actor-name'> { actor.name } </div>
            <div className='actor-character'> { actor.character} </div>
        </div>
    );
};

export default ActorCard;