import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {api_key} from "../../../common/apis/movieApiKey"
import movieApi from "../../../common/apis/movieApi"

const params = {
    api_key
  };

const initialState = {
  now_playing : [],
  top_rated :[],
  upcoming :[],
  movies : [],
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
         
         const { type , data } = action.payload
         const updatedMovies = [].concat(...state.movies, data)
      
         return { ...state , [type]: data ,  movies: updatedMovies}
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
