import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Alert, useColorScheme } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkTheme } from '../../utilities/app/slices/themeSlice';
import * as S from '../../utilities/commons/Styles';
import { fetchPopular } from '../../utilities/app/slices/popularSlice';
import { fetchTopRated } from '../../utilities/app/slices/topRatedSlice';



/**
 *  Component which purpose is to GET all list of movies within its side effect lifecycle
 */
const SplashScreen = ({ toggleLoading }) => {

	const dispatch = useDispatch();
	const colorScheme = useColorScheme();

	const popularStatus = useSelector(state => state.popular.status);
	const topRatedStatus = useSelector(state => state.topRated.status);

	useEffect(() => {
		colorScheme === 'dark' && dispatch(setDarkTheme());
		const fetchMovies = async () => {
			popularStatus === 'idle' && await dispatch(fetchPopular()).unwrap();
			topRatedStatus === 'idle' && await dispatch(fetchTopRated()).unwrap();	
			toggleLoading();
		};
		fetchMovies();
	}, []);

	// useEffect(() => {
	// 	if (['succeeded', 'failed'].includes(topRatedStatus) && ['succeeded', 'failed'].includes(popularStatus)) {
	// 		toggleLoading();
	// 	}

	// }, [popularStatus, topRatedStatus]);

		
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


// useEffect(() => {
// 	colorScheme === 'dark' && dispatch(setDarkTheme());
// 	fetchAllMovies()
// 		.then((data) => {
// 			const popularData = data[0];
// 			const topRatedData = data[1];
// 			dispatch(setPopularMovies(popularData.results));
// 			dispatch(setTopRatedMovies(topRatedData.results));
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			Alert.alert('Ups!... an ERROR occurred', 'Try again later...');
// 		})
// 		.finally(() => {
// 			toggleLoading();
// 		});
// }, []);

// useEffect(() => {
	// 	getMovies('top_rated')
	// 		.then((data) => {
	// 			dispatch(setTopRatedMovies(data.results));
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		})
	// 		.finally(() => {
	// 			toggleLoading();
	// 		});
	// });

// getMovies('popular')
	// 	.then((data) => {
	// 		dispatch(setPopularMovies(data.results));
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	});