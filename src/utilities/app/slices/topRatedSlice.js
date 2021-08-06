import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovies } from '../../api/moviedb';

const initialState = {
	page: 1,
	topRated: [],
	status: 'idle',
	error: null
};

export const fetchTopRated = createAsyncThunk(
	'topRated/fetchTopRated',
	async (page) => {
		const data = await getMovies('top_rated', page);
		return data.results;
	}
);

export const topRatedSlice = createSlice({
	name: 'topRated',
	initialState,
	reducers: {
		setTopRatedMovies: (state, action) => {
			state.topRated = state.topRated.concat(action.payload);
		},
	},
	extraReducers: {
		[fetchTopRated.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchTopRated.fulfilled]: (state, action) => {
			return {
				...state,
				status: 'succeeded',
				topRated: state.topRated.concat(action.payload)
			};
		},
		[fetchTopRated.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
});

export const selectTopRatedById = (state, movieId) =>
	state.topRated.topRated.find(movie => movie.id === movieId);

export const { setTopRatedMovies } = topRatedSlice.actions;
export default topRatedSlice.reducer;