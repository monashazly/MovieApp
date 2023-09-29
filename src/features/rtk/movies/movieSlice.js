import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {api_key} from "../../../common/apis/movieApiKey"
import movieApi from "../../../common/apis/movieApi"

const params = {
    api_key
  };

const initialState = {
  movies : [],
  series : [],
  selectedMovie : {}
}

export const fetchMovieWithApi = createAsyncThunk('movieSlice/fetchMovieWithApi' , async(TMDPID)=>{
   const response = await movieApi.get(`/movie/${TMDPID}`, { params });
   return response.data
})

export const fetchMovies = createAsyncThunk('movieSlice/fetchMovies' , async()=>{
    const response = await movieApi.get(`/movie/popular` , {params})
    return response.data.results
}) 

export const fetchSeries = createAsyncThunk('movieSlice/fetchSeries' , async()=>{
  const response = await movieApi.get(`/tv/popular` , {params})
  return response.data.results
}) 

export const fetchMovie = createAsyncThunk('movieSlice/fetchMovie', async (selectedId , { getState , dispatch}) => {
   const state = getState().movies;
   if(!state.movies.length){
       dispatch(fetchMovieWithApi(selectedId))
   } 
   else
   {
      const selectedMovie = state.movies.find((movie) => movie.id == selectedId);
      return selectedMovie;
   }
 });

const movieSlice = createSlice({
    name :'movieSlice' ,
    initialState ,
    reducers :{
       addMovies : (state , action) => {
        state.movies = action.payload;
       },
       setSelectedMovie: (state, action) => {
         state.selectedMovie = action.payload;
       },
    },
    extraReducers :(builder)=>{
       builder.addCase(fetchMovies.fulfilled , (state , action)=>{
          return { ...state , movies : action.payload} 
       })
       builder.addCase(fetchSeries.fulfilled , (state , action)=>{
          return { ...state , series : action.payload} 
       })
       builder.addCase(fetchMovie.fulfilled , (state , action)=>{
          state.selectedMovie = action.payload
       })
       builder.addCase(fetchMovieWithApi.fulfilled , (state , action)=>{
          state.selectedMovie = action.payload
       })
    }
})

export const {addMovies} = movieSlice.actions
export default movieSlice.reducer;
