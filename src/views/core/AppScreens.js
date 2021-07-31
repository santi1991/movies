import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../../utilities/app/reducers/themeReducer';
import SplashScreen from '../splash/SplashScreen';
import HomeScreen from '../home/HomeScreen';

const AppScreens = () => { 

	console.log('render: A P P   S C R E E N S');
	const currentTheme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const toggleLoading = () => setLoading(!loading);

	// const theme = currentTheme === 'dark' ? darkTheme : lightTheme;

	const toggleTheme = (selectedTheme) => {
		if (selectedTheme === 'dark') {
			return dispatch(setDarkTheme());
		}
		return dispatch(setLightTheme());
	};

	// const theme = lightTheme;

	if (loading === true) {
		return <SplashScreen toggleLoading={toggleLoading} />;
	}
	return (
		<HomeScreen 
			theme={currentTheme}
			toggleTheme={toggleTheme}
		/>					
	);
};

export default AppScreens;