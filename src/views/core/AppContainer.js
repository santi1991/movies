import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
// import { useFlipper, useReduxDevToolsExtension  } from '@react-navigation/devtools';
import { selectCurrentTheme } from '../../utilities/app/slices/themeSlice';
import { lightNavTheme, darkNavTheme } from '../../utilities/commons/Theme';
import AppScreens from './AppScreens';


const AppContainer = () => {
	const navigationRef = useNavigationContainerRef();

	// const theme = useSelector((state) => state.theme);
	const theme = useSelector(selectCurrentTheme);
	// useReduxDevToolsExtension(navigationRef);

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer 
				ref={navigationRef}
				theme={theme.name === 'dark' ? darkNavTheme : lightNavTheme}
			>
				<AppScreens />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default AppContainer;
