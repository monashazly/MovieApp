import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {api_key} from "../../../common/apis/movieApiKey"
import movieApi from "../../../common/apis/movieApi"

const params = {
    api_key
  };

const initialState = {
  nowPlaying : [],
  topRated :[],
  upcoming :[],
  selectedMovie : {}
}

export const fetchMovieWithApi = createAsyncThunk('movieSlice/fetchMovieWithApi' , async(TMDPID)=>{
   const response = await movieApi.get(`/movie/${TMDPID}`, { params });
   return  response.data
})

export const fetchMovies = createAsyncThunk('movieSlice/fetchMovies' , async(type)=>{
    const response = await movieApi.get(`/movie/${type}` , {params})
    return {data : response.data.results , type} 
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
            if(action.payload.type === 'now_playing') return { ...state , nowPlaying :  action.payload.data} 
            else if(action.payload.type === 'upcoming') return { ...state , upcoming : action.payload.data} 
            return { ...state , topRated : action.payload.data} 
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
