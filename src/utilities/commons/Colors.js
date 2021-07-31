/**
 * main colors of the app
 */
export const baseColors = {
	primary: '#1DE9B6',
	secondary: '#B388FF',
	error: '#BF360C',
};

/**
 * light and dark theme palette color
 */
export const colors = {
	app: {
		primary: '#1DE9B6',
		secondary: '#B388FF',
		error: '#BF360C',
	},
	dark: {
		background: '#212121',
		surface: '#424242',
		text: '#FFFFFF',
		border: '#EEEEEE',
	},
	light: {
		primary: '#1DE9B6',
		secondary: '#B388FF',
		background: '#FFFFFF',
		surface: '#F5F5F5',
		text: '#000000',
		border: '#EEEEEE',		
	}
};

/**
 * helper function that returns the desired color depending of the component and the current theme
 */
export const colorSelector = (currentTheme, type) => {
	let color;
	if (currentTheme === 'dark') {
		switch (type) {
			case 'text':
				color = colors.dark.text;
				break;
			case 'background':
				color = colors.dark.background;
				break;
			case 'surface':
				color = colors.dark.surface;
				break;
			default:
				color = 'white';
				break;
		}
	}
	if (currentTheme === 'light') {
		switch (type) {
			case 'text':
				color = colors.light.text;
				break;
			case 'background':
				color = colors.light.background;
				break;
			case 'surface':
				color = colors.light.surface;
				break;
			default:
				color = 'black';
				break;
		}
	}
	return color;
};

