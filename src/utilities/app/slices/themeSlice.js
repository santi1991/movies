import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../commons/Theme';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: lightTheme,
	reducers: {        
		setDarkTheme: (state) => {
			return darkTheme;
		},
		setLightTheme: (state) => {
			return lightTheme;
		}
	}
});
export const { setDarkTheme,  setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;

/**
 * Selectors
 */

export const selectCurrentTheme = state => state.theme;