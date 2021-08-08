import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../splash/SplashScreen';
import { contentScreens } from './ScreenList';

const Stack = createStackNavigator();

const AppScreens = () => {

	// console.log('render: AppScreens');
	const [isLoading, setIsLoading] = useState(true);
	const toggleLoading = () => setIsLoading(!isLoading);


	if (isLoading) {
		// We haven't finished fetching the required data yet
		return <SplashScreen toggleLoading={toggleLoading} />;
	}
	return (
		<Stack.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{
				headerShown: false
			}}
		>
			{/* <Stack.Screen
				
				options={{
					headerT
				}}
			/> */}
			{
				contentScreens.map((s) => {
					return (
						<Stack.Screen
							key={s.id}
							name={s.name}
							component={s.component}
							options={s.options}
						/>
					);
				})
			}
		</Stack.Navigator>
	);
};

export default AppScreens;
