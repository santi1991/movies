import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
	name: 'movies',
	initialState: {
		popular: [],
		topRated: []
	},
	reducers: {
		setPopularMovies: (state, action) => {
			state.popular = action.payload;
		},
		setTopRatedMovies: (state, action) => {
			state.topRated = action.payload;
		},
	}
});

export const { setPopularMovies, setTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;