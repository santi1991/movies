import { configureStore  } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import popularReducer from './slices/popularSlice';
import topRatedReducer from './slices/topRatedSlice';


export default configureStore({
	reducer: {
		theme: themeReducer,
		topRated: topRatedReducer,
		popular: popularReducer
	}
});
