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




// const styles = StyleSheet.create({
// 	sectionContainer: {
// 		marginTop: 32,
// 		paddingHorizontal: 24,
// 	},
// 	sectionTitle: {
// 		fontSize: 24,
// 		fontWeight: '600',
// 	},
// 	sectionDescription: {
// 		marginTop: 8,
// 		fontSize: 18,
// 		fontWeight: '400',
// 	},
// 	highlight: {
// 		fontWeight: '700',
// 	},
// });
