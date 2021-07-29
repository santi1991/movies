/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';


const App = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const backgroundStyle = {
		backgroundColor: isDarkMode ? 'black' : 'white',
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ScrollView
				contentInsetAdjustmentBehavior='automatic'
				style={backgroundStyle}
			>
				<Text style={styles.sectionTitle}>Hola Mundo</Text>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	// sectionContainer: {
	// 	marginTop: 32,
	// 	paddingHorizontal: 24,
	// },
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	// sectionDescription: {
	// 	marginTop: 8,
	// 	fontSize: 18,
	// 	fontWeight: '400',
	// },
	// highlight: {
	// 	fontWeight: '700',
	// },
});

export default App;