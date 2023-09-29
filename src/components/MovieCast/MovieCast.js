import "./MovieCast.scss"
import { useParams } from "react-router-dom";
import movieApi from "../../common/apis/movieApi";
import { api_key } from "../../common/apis/movieApiKey";
import { useEffect, useState } from "react";
import ActorCard from "../ActorCard/ActorCard";

const MovieCast = () => {
    const [ cast , setCast ] = useState([])
    const { TMDPID } = useParams();
    const params = {
        api_key,
      };

    useEffect(()=>{

        const fetchCast = async()=>{
            const cast = await movieApi.get(`/movie/${TMDPID}/credits`, { params })
            setCast(cast.data.cast.slice(0,10))
        }

        fetchCast();
    } , [])

    return (
        <div className="cast-container">
          { cast?.map(actor => ( <ActorCard key={actor.cast_id} actor={actor}></ActorCard>) ) }
        </div>
    );
};

export default MovieCast;