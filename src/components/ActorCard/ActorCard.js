import './ActorCard.scss'
import { imgBaseURL } from "../../common/apis/imgBaseURL";

const ActorCard = (props) => {
    const { actor } = props 

    return (
        <div className='actor-card'>
            <img className='actor-profile' src={ imgBaseURL + actor.profile_path } alt={ actor.name} />
            <div className='actor-name'> { actor.name } </div>
            <div className='actor-character'> { actor.character} </div>
        </div>
    );
};

export default ActorCard;