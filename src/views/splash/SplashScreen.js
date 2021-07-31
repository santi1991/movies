import React, { useEffect } from 'react';
import { SafeAreaView, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
// import { getMovies } from '../../utilities/api/moviedb';
import { setTopRatedMovies } from '../../utilities/app/reducers/movieReducer';
// import { styles } from '../../utilities/commons/Styles';

const SplashScreen = ({ toggleLoading }) => {

	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(setTopRatedMovies(movies));

		setTimeout(() => {
			toggleLoading();
		}, 2000);
	}, []);

	// useEffect(() => {
	// 	getMovies()
	// 		.then((response) => {
	// 			dispatch(setTopRatedMovies({ payload: response.data.total_results }));
	// 			console.log(response.data.page);
	// 			console.log(response.data.total_pages);
	// 			console.log(response.data.total_results);
	// 			for (let i of response.data.results) {
	// 				console.log(i);
	// 			}

	// 			alert('success!');				
	// 		})
	// 		.catch(() => {
	// 			alert('ERROR!');
	// 		});
	// 		// .finally(() => {
	// 				toggleLoading();
	// 		// });
	// }, []);

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



const movies = [
	{
		adult: false,
		backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
		genre_ids: [
			18,
			28,
			80,
			53
		],
		id: 155,
		original_language: 'en',
		original_title: 'The Dark Knight',
		overview: `Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.`,
		popularity: 62.155,
		poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
		release_date: '2008-07-16',
		title: 'The Dark Knight',
		video: false,
		vote_average: 8.5,
		vote_count: 25517
	},
	{
		adult: false,
		backdrop_path: '/yHtB4KHNigx3ZoxDvQbW2SOXGfq.jpg',
		genre_ids: [
			16,
			10751,
			12,
			14
		],
		id: 441130,
		original_language: 'en',
		original_title: 'Wolfwalkers',
		overview: `
			In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, 
			a young apprentice hunter comes to Ireland with her father to wipe out the last pack. 
			But when she saves a wild native girl, 
			their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.
		`,
		popularity: 43.316,
		poster_path: '/ehAKuE48okTuonq6TpsNQj8vFTC.jpg',
		release_date: '2020-10-26',
		title: 'Wolfwalkers',
		video: false,
		vote_average: 8.5,
		vote_count: 508
	}
];

export default SplashScreen;