import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from '../../commons/Theme';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: lightTheme,
	},
	reducers: {        
		setDarkTheme: (state) => {
			state.theme = darkTheme;
		},
		setLightTheme: (state) => {
			state.theme = lightTheme;
		}
	}
});

export const { setDarkTheme,  setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;