import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/reducers';
import counterReducer from './reducers/counterReducer';
import themeReducer from './reducers/themeReducer';
import movieReducer from './reducers/movieReducer';

export default configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer,
		movies: movieReducer
	},
	// reducer: rootReducer
});