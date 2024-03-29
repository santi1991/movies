import { DefaultTheme as defaultNavTheme , DarkTheme as darkNavTheme  } from '@react-navigation/native';
/**
 * common colors
 */
export const baseColors = {
	primary: '#1DE9B6',
	secondary: '#B388FF',
	error: '#BF360C',
	disabled: 'grey'
};

/**
 * text sizes
 */
export const fontSizes = {
	xl: '26px',
	l: '20px',
	m: '16px',
	sm: '14px',
	xm: '12px'
};

/**
 *  dark theme object
 */
export const darkTheme = {
	name: 'dark',
	colors: {	
		...baseColors,	
		background: '#212121',
		surface: '#424242',
		text: '#FFFFFF',
		placeholder:'#E0E0E0'
	},
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		...fontSizes
	}
};

/**
 * light theme object
 */
export const lightTheme = {
	name: 'light',
	colors: {	
		...baseColors,	
		background: '#FFFFFF',
		surface: '#F5F5F5',
		text: '#000000',
		placeholder:'grey'
	},
	fonts: ['sans-serif', 'Roboto'],
	fontSizes: {
		...fontSizes
	}
};

export const lightNavTheme = {
	...defaultNavTheme,
	colors: {
	  ...defaultNavTheme.colors,
	  primary: baseColors.primary,
	},
};

export { darkNavTheme };