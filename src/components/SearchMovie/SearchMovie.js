import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchMovies } from '../../features/rtk/movies/movieSlice';
import { CiSearch } from "react-icons/ci";
import SearchResultsSidebar from '../SearchResultsSidebar/SearchResultsSidebar';
import './SearchMovie.scss'
import SearchResults from '../SearchResults/SearchResults';

const SearchMovie = () => {

  const dispatch = useDispatch()
  const searchResults = useSelector(state => state.movies.searchMovies)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const intialQuery = searchParams.get('query');
  const [ query , setQuery] = useState(intialQuery || '')


  const setSearchField = (e)=>{
    setQuery(e.target.value)
    searchParams.set('query' , e.target.value)
  }

  useEffect(()=>{

     dispatch(fetchSearchMovies(query))

  } , [dispatch , query])

  return (
    <div>
      <div className='search-header'>
        <CiSearch className='search-icon' color='#989797' />
        <input className='search-header-input' value={query} onChange={setSearchField}/>
      </div>
      <div className=' results-container'>
        <div className="search-results-component">
          <SearchResultsSidebar />
        </div>
        <div className='search-cards'>
          <SearchResults searchResults={searchResults}/>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
