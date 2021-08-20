import React, { useState, useEffect, useRef } from 'react';
import { Alert, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { selectPopularById } from '../../utilities/app/slices/popularSlice';
import { selectTopRatedById } from '../../utilities/app/slices/topRatedSlice';
import { createImgUrl, fetchMovieData } from '../../utilities/api/moviedb';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from '../../utilities/commons/Styles';
import HeaderBar from './HeaderBar';

const MovieScreen = ({ navigation, route }) => {

	// const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme);

	const refYear = useRef('');
	const refMainCast = useRef([]);
	// const refBackdropImgUrl = useRef('');

	// const movie = useSelector(state =>
	// 	route.params.type === 'popular' ? selectPopularById(state, route.params.movieId) :
	// 		selectTopRatedById(state, route.params.movieId)
	// );
	
	const moviePopular = useSelector(state => selectPopularById(state, route.params.movieId));
	const movieTopRated = useSelector(state => selectTopRatedById(state, route.params.movieId));
	const movie = moviePopular ? moviePopular : movieTopRated;
	const backdropImgUrl = createImgUrl(movie.backdrop_path);

	const [status, setStatus] = useState({
		credits: null,
		details: null,
		isLoading: true,
		isError: false
	});

	const obtainReleaseYear = (currentMovie) => {
		const releaseDate = currentMovie.release_date?.split('-') || ['no data'];
		return releaseDate[0];
	};

	const renderGenreItem = ({ item }) => 
		<S.Text key={item.id}>{item.name + ', '}</S.Text>;

	const renderCastItem = ({ item }) => {
		const castImgUrl = createImgUrl(item.profile_path);
		return (
			<S.ActorItemView>
				<S.ActorImage source={{ uri: castImgUrl }} />
				<S.Text textAlign={'center'} marginTop={8}>{item.name}</S.Text>
			</S.ActorItemView>
		);
	};
	
	useEffect(() => {
		// console.log('MovieScreen mounted');
		// const movie = moviePopular ? moviePopular : movieTopRated;
		fetchMovieData(movie.id)
			.then((data) => {
				// refBackdropImgUrl.current = createImgUrl(movie.backdrop_path);
				refYear.current = obtainReleaseYear(movie);
				refMainCast.current = data[0].cast.slice(0, 4);
				setStatus(prevState => ({
					...prevState,
					credits: data[0],
					details: data[1],
					isLoading: false
				}));
			})
			.catch(() => {
				setStatus(prevState => ({
					...prevState,
					isLoading: false,
					isError: true
				}));
			});	
		// return () => {
		// 	console.log('MovieScreen UNMOUNTED');
		// };	
	}, []);

	


	return (
		<S.ScreenContainer>

			<HeaderBar 
				movie={movie} //push to favorite movies if heart button pressed
				handleBackButton={() => navigation.goBack()}
			/>			

			<S.BackdropImage source={{ uri: backdropImgUrl }} />

			<S.MovieDetailView>

				<S.RowView>
					<S.Headline textAlign='left'>
						{movie.title}
					</S.Headline>
					<Icon name='movie-filter' size={22} color='grey' />
				</S.RowView>

				<S.RowView>
					<S.Button onPress={() => Alert.alert('Nice choice!', 'You wanna watch this movie...')}>
						<S.Text>WATCH NOW</S.Text>
					</S.Button>
					
					<Rating
						imageSize={18}
						readonly={true}
						startingValue={movie.vote_average / 2}
						tintColor={theme.colors.surface}
					/>
				</S.RowView>

				<S.Text textAlign={'left'} marginTop={12} marginBottom={12}>
					{movie.overview}
				</S.Text>


				{
					status.isLoading ? (
						<S.Text>loading...</S.Text>
					) : status.isError ? (
						<S.Text>Something went wrong...</S.Text>
					) : (
						<>
							<FlatList
								horizontal
								initialNumToRender={4}
								data={refMainCast.current}
								renderItem={renderCastItem}
								keyExtractor={item => item.id}
								ListEmptyComponent={<S.Text marginTop={8} marginBottom={8}>No data...</S.Text>}
							/>

							<S.Text marginTop={10} marginBottom={2} fontWeight={'bold'}>
								{`Studio: `}
								<S.Text>
									{status.details.production_companies[0]?.name || 'no data'}
								</S.Text>
							</S.Text>

							<S.BasicRowView >
								<S.Text fontWeight={'bold'}>
									{`Genre: `}
								</S.Text>
								<FlatList
									horizontal
									data={status.details.genres || 'no data'}
									renderItem={renderGenreItem}
									keyExtractor={item => item.id}
									ListEmptyComponent={<S.Text marginTop={8} marginBottom={8}>Something went wrong...</S.Text>}
								/>				
							</S.BasicRowView>

							<S.Text marginTop={2} marginBottom={2} fontWeight={'bold'}>
								{`Release: `}
								<S.Text>
									{refYear.current}
								</S.Text>
							</S.Text>
						</>
					)
				}
			</S.MovieDetailView>
		</S.ScreenContainer>
	);
};

export default MovieScreen;