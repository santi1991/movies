import React from 'react';
import store from './src/utilities/app/store';
import { Provider } from 'react-redux';
import AppScreens from './src/views/core/AppScreens';


const App = () => {
	
	return (
		<Provider store={store}>
			<AppScreens/>
		</Provider>
	);
};

export default App;


