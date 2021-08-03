import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import AppScreens from './AppScreens';


const AppContainer = () => {

	const theme = useSelector((state) => state.theme.theme);

	return (
		<ThemeProvider theme={theme}>
			<AppScreens />
		</ThemeProvider>
	);
};

export default AppContainer;
