import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		theme: 'light',
	},
	reducers: {
		setDarkTheme: (state) => {
			state.theme = 'dark';
		},
		setLightTheme: (state) => {
			state.theme = 'light';
		}
	}
});

export const { setDarkTheme, setLightTheme } = themeSlice.actions;
export default themeSlice.reducer;