import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../api/moviedb';

const initialState = {
	page: 1,
	popular: [],
	status: 'idle',
	error: null
};

export const fetchPopular = createAsyncThunk(
	'popular/fetchPopular',
	async (page) => {
		const data = await getMovies('popular', page);
		return data.results;
	}
);

export const popularSlice = createSlice({
	name: 'popular',
	initialState,
	reducers: {
		// slice-specific reducers here
		setPopularMovies: (state, action) => {
			state.popular = state.popular.concat(action.payload);
		},
	},
	extraReducers: {
		[fetchPopular.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchPopular.fulfilled]: (state, action) => {
			return {
				...state,
				status: 'succeeded',
				popular: state.popular.concat(action.payload) // Add any fetched movies to the array
			};
			// state.status = 'succeeded';
			// state.popular = state.popular.concat(action.payload);
		},
		[fetchPopular.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
});

export const { setPopularMovies } = popularSlice.actions;

export default popularSlice.reducer;

/**
 * Selectors
 */
export const selectAllPopular = state => { return { page: state.popular.page, popularMovies: state.popular.popular }; };

export const selectPopularById = (state, movieId) =>
	state.popular.popular.find(movie => movie.id === movieId);

/**
 * However, there are times when a slice reducer needs to respond to other actions
 * that weren't defined as part of this slice's reducers field.
 * We can do that using the slice extraReducers field instead.
 *
 * In this case, we need to listen for the "pending" and "fulfilled" action types dispatched by our fetchPopular thunk.
 */


