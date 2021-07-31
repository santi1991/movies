import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './reducers/themeReducer';
import movieReducer from './reducers/movieReducer';

export default configureStore({
	reducer: {
		theme: themeReducer,
		movies: movieReducer
	},
});