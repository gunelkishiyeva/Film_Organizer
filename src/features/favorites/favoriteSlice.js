import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name:'favorite',
    initialState: {
        isSaved: false,
        savedId: null,
        favorites: []
    },
      
    reducers: {
        addFav: (state, action) => {
           if(!state.favorites.some(f => f.imdbID === action.payload.imdbID)) {
               state.favorites.push(action.payload);
           }
        },  
        removeFav: (state, action) => {
            state.favorites = state.favorites.filter(f => f.imdbID !== action.payload);
        },
         saveFavs: (state, action) =>{
             state.savedId = action.payload;
         }
    }
    });   
export const selectSavedId = (state) => state.favorite.savedId;
export const selectFavorites = (state) => state.favorite.favorites;

export const {addFav, removeFav, saveFavs} = favoriteSlice.actions;

export default favoriteSlice.reducer;