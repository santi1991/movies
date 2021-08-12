import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

// const addItemToArray  = (state, action) => {
// 	state.push(action.payload);
// };

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		// addFavoriteMovie: addItemToArray, // this can be done
		addFavoriteMovie: (state, action) => {
			// "Mutate" the existing state, no return value needed
			state.push(action.payload);
		},
		deleteFavoriteMovie(state, action) {
			// Construct a new result array immutably and return it
			return state.filter(movie => movie.id !== action.payload);
		}
	}
});

export const { addFavoriteMovie, deleteFavoriteMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;

export const selectFavoriteById = (state, movieId) =>
	state.favorites.find(movie => movie.id === movieId);