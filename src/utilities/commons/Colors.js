// export const darkColors = {
// 	primary: '#1DE9B6',
// 	secondary: '#B388FF',
// 	background: '#212121',
// 	surface: '#424242',
// 	text: '#FFFFFF',
// 	border: '#EEEEEE',
// 	error: '#BF360C',
// };

// export const lightColors = {
// 	primary: '#1DE9B6',
// 	secondary: '#B388FF',
// 	background: '#FFFFFF',
// 	surface: '#F5F5F5',
// 	text: '#000000',
// 	border: '#EEEEEE',
// 	error: '#BF360C',
// };

export const baseColors = {
	primary: '#1DE9B6', //'#F194FF'
	secondary: '#B388FF',
	error: '#BF360C',
};

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

