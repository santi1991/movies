import 'react-native-gesture-handler'; 
import React from 'react';
import store from './src/utilities/app/store';
import { Provider } from 'react-redux';
import AppContainer from './src/views/core/AppContainer';

const App = () => {
	
	return (
		<Provider store={store}>
			<AppContainer/>
		</Provider>
	);
};

export default App;


