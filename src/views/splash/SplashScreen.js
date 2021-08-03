import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Alert, useColorScheme } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDarkTheme } from '../../utilities/app/reducers/themeReducer';
import * as S from '../../utilities/commons/Styles';
import { fetchAllMovies } from '../../utilities/api/moviedb';
import { setPopularMovies, setTopRatedMovies } from '../../utilities/app/reducers/movieReducer';

/**
 *  Component which purpose is to GET all list of movies within its side effect lifecycle
 */
const SplashScreen = ({ toggleLoading }) => {

	const dispatch = useDispatch();
	const colorScheme = useColorScheme();

	useEffect(() => {
		colorScheme === 'dark' && dispatch(setDarkTheme());
		fetchAllMovies()
			.then((data) => {
				const popularData = data[0];
				const topRatedData = data[1];
				dispatch(setPopularMovies(popularData.results));
				dispatch(setTopRatedMovies(topRatedData.results));
			})
			.catch((error) => {
				console.log(error);
				Alert.alert('Ups!... an ERROR occurred', 'Try again later...');
			})
			.finally(() => {
				toggleLoading();
			});
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
			<ActivityIndicator size='large' color='#00ff00' />
			<S.Title marginTop={12}>Estamos obteniendo datos...</S.Title>
		</SafeAreaView>
	);
};

SplashScreen.propTypes = {
	toggleLoading: PropTypes.func
};

export default SplashScreen;