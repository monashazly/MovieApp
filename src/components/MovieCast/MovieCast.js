import "./MovieCast.scss"
import { useParams , useLocation } from "react-router-dom";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/movieApiKey";
import { useEffect, useState , useMemo } from "react";
import ActorCard from "../ActorCard/ActorCard";

const MovieCast = () => {
    const [ cast , setCast ] = useState([])
    const { TMDPID } = useParams();
    const location = useLocation();
    const target = location.pathname.includes('movie') ? 'movie' : 'tv';

    const params = useMemo(() => ({
        api_key,
    }), []);

    useEffect(()=>{
        const fetchCast = async()=>{
            const cast = await movieApi.get(`/${target}/${TMDPID}/credits`, { params })
            setCast(cast.data.cast.slice(0,10))
        }

        fetchCast();
    } , [TMDPID , params , target])

    return (
        <div className="cast-container">
          { cast?.map(actor => ( <ActorCard key={actor.cast_id} actor={actor}></ActorCard>) ) }
        </div>
    );
};

export default MovieCast;