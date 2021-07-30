import React from 'react';
import { SafeAreaView, ActivityIndicator, Text, StyleSheet } from 'react-native';
// import { styles } from '../../utilities/commons/Styles';

const SplashScreen = () => {
	return (
		<SafeAreaView style={[styles.container, { justifyContent: 'center' }]} >
			<ActivityIndicator size='large' color='#00ff00' />
			<Text style={styles.title}>Estamos obteniendo datos...</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	title: {
		textAlign: 'center', 
		margin: 5
	}
});

export default SplashScreen;

