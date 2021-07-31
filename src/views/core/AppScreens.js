import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '../../utilities/app/reducers/themeReducer';
import SplashScreen from '../splash/SplashScreen';
import HomeScreen from '../home/HomeScreen';

const AppScreens = () => { 

	const currentTheme = useSelector((state) => state.theme.theme);
	const dispatch = useDispatch();

	const [loading, setLoading] = useState(true);
	const toggleLoading = () => setLoading(!loading);

	const toggleTheme = (selectedTheme) => {
		if (selectedTheme === 'dark') {
			return dispatch(setDarkTheme());
		}
		return dispatch(setLightTheme());
	};

	if (loading === true) {
		return <SplashScreen 
			theme={currentTheme}
			toggleLoading={toggleLoading} />;
	}
	return (
		<HomeScreen 
			theme={currentTheme}
			toggleTheme={toggleTheme}
		/>					
	);
};

export default AppScreens;