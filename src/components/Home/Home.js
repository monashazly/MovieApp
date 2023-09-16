import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from "react-redux";
import {fetchMovies , fetchSeries} from "../../features/rtk/movies/movieSlice"


function Home(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchMovies());
        dispatch(fetchSeries());

    } ,[dispatch])
    
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing></MovieListing>
        </div>
    );
};

export default Home;