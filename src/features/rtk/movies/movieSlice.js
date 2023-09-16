import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import {api_key} from "../../../common/apis/movieApiKey"
import movieApi from "../../../common/apis/movieApi"

const params = {
    api_key
  };

const initialState = {
  movies : {},
  series : {}
}


export const fetchMovies = createAsyncThunk('movieSlice/fetchMovies' , async()=>{
    const response = await movieApi.get(`/movie/popular` , {params})
    return response.data.results
}) 

export const fetchSeries = createAsyncThunk('movieSlice/fetchSeries' , async()=>{
  const response = await movieApi.get(`/tv/popular` , {params})
  return response.data.results
}) 

const movieSlice = createSlice({
    name :'movieSlice' ,
    initialState ,
    reducers :{
       addMovies : (state , action) => {
        state.movies = action.payload;
       }
    },
    extraReducers :(builder)=>{
      builder.addCase(fetchMovies.pending , (state , action)=>{
      })
       builder.addCase(fetchMovies.fulfilled , (state , action)=>{
          return { ...state , movies : action.payload} 
       })
       builder.addCase(fetchSeries.rejected , (state , action)=>{
          console.log('series rejected')
      })
       builder.addCase(fetchSeries.fulfilled , (state , action)=>{
          return { ...state , series : action.payload} 
       })
    }
})

export const {addMovies} = movieSlice.actions
export default movieSlice.reducer;
