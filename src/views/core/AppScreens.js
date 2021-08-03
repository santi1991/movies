import React, { useState } from 'react';
import SplashScreen from '../splash/SplashScreen';
import HomeScreen from '../home/HomeScreen';

const AppScreens = () => {

	const [loading, setLoading] = useState(true);
	const toggleLoading = () => setLoading(!loading);
	
	return (
		<>
			{
				loading === true ? (
					<SplashScreen toggleLoading={toggleLoading} />
				) : (
					<HomeScreen />
				)
			}
		</>
	);
};

export default AppScreens;
