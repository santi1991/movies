import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/reducers';
import counterReducer from './reducers/counterReducer';
import themeReducer from './reducers/themeReducer';

export default configureStore({
	reducer: {
		counter: counterReducer,
		theme: themeReducer
	},
	// reducer: rootReducer
});