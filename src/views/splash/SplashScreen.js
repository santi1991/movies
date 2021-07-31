import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import * as S from '../../utilities/commons/Styles';
import { fetchAllMovies } from '../../utilities/api/moviedb';
import { setPopularMovies, setTopRatedMovies } from '../../utilities/app/reducers/movieReducer';

/**
 *  Component which purpose is to GET all list of movies within its side effect lifecycle
 */
const SplashScreen = ({ theme, toggleLoading }) => {

	const dispatch = useDispatch();

	useEffect(() => {
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
			<S.Title theme={theme} marginTop={12}>Estamos obteniendo datos...</S.Title>
		</SafeAreaView>
	);
};

export default SplashScreen;