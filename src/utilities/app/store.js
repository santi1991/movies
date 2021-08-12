import { configureStore  } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import popularReducer from './slices/popularSlice';
import topRatedReducer from './slices/topRatedSlice';
import favoritesReducer from './slices/favoritesSlice';

export default configureStore({
	reducer: {
		theme: themeReducer,
		topRated: topRatedReducer,
		popular: popularReducer,
		favorites: favoritesReducer
	}
});
