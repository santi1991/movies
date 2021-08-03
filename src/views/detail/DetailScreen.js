import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Alert, Modal, useWindowDimensions, FlatList } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl, fetchMovieData } from '../../utilities/api/moviedb';
import { useSelector } from 'react-redux';

const DetailScreen = ({ visible, onHideModal, movie }) => {

	const theme = useSelector((state) => state.theme.theme);
	const refYear = useRef('');

	const [like, setLike] = useState(false);
	const toggleLike = () => setLike(!like);

	const heartIcon = like === true ? 'favorite' : 'favorite-border';
	const heartIconColor = like === true ? 'red' : 'white';
	
	const [movieData, setMovieData] = useState({
		cast: [],
		genre: [],
		production_companies: [],
	});

	const backdropImgUrl = createImgUrl(movie.backdrop_path);

	const windowWidth = useWindowDimensions().width;
	/**
	 * distance between the absolute IconButtons located at top of the screen
	 */
	const separation = windowWidth - 100;

	/**
	 * Function to obtain the year from this format yyyy-mm-dd
	 */
	const obtainReleaseYear = () => {
		const releaseDate = movie.release_date?.split('-') || ['no data'];
		refYear.current = releaseDate[0];
	};

	/**
	 * The actors list array is huge! picking just the first ones	 
	 */
	const selectMainCast = (actorsList) => {
		const mainCast = [];
		for (let i = 0; i < 7; i++) {
			if(actorsList[i]) {
				mainCast.push(actorsList[i]);
			}			
		}
		return mainCast;
	};

	const renderCastItem = ({ item }) => {
		const castImgUrl = createImgUrl(item.profile_path);
		return (
			<S.ActorItemView>
				<S.ActorImage source={{ uri: castImgUrl }} />
				<S.Text textAlign={'center'} marginTop={8}>{item.name}</S.Text>
			</S.ActorItemView>
		);
	};

	const renderGenreItem = ({ item }) => 
		<S.Text key={item.id}>{item.name + ', '}</S.Text>;

	useEffect(() => {
		obtainReleaseYear();
		fetchMovieData(movie.id)
			.then((data) => {
				const credits = data[0];
				const details = data[1];
				const reducedCast = selectMainCast(credits.cast);
				setMovieData(prevState => ({
					...prevState,
					cast: reducedCast,
					genre: details.genres,
					production_companies: details.production_companies,
				}));
			})
			.catch((error) => {
				console.log(error);
				Alert.alert('UPS!...An ERROR occurred!', 'Try again later...');
				onHideModal(!visible);				
			});
	}, []);
			
	return (
		<Modal
			presentationStyle='pageSheet'
			animationType='slide'
			visible={visible}
			onRequestClose={() => onHideModal(!visible)}
		>
			<S.ScreenContainer>
				<S.RowViewAbsolute>
					<S.IconButton onPress={() => onHideModal(!visible)} marginLeft={separation} transparent>
						<Icon name='arrow-back' size={24} color='white' />
					</S.IconButton>

					<S.IconButton onPress={toggleLike} transparent>
						<Icon name={heartIcon} size={22} color={heartIconColor} />
					</S.IconButton>
				</S.RowViewAbsolute>

				<S.BackdropImage source={{ uri: backdropImgUrl }} />

				<S.MovieDetailView>

					<S.RowView>
						<S.Headline textAlign='left' >{movie.title} </S.Headline>
						<Icon name='movie-filter' size={22} color='grey' />
					</S.RowView>

					<S.RowView>
						<S.Button onPress={() => Alert.alert('You wanna watch this movie!')}>
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

					<FlatList
						horizontal
						initialNumToRender={4}
						data={movieData.cast}
						renderItem={renderCastItem}
						keyExtractor={item => item.id}
						ListEmptyComponent={<S.Text marginTop={8} marginBottom={8}>cargando...</S.Text>}
					/>

					<S.Text marginTop={10} marginBottom={2} fontWeight={'bold'}>
						{`Studio: `}
						<S.Text>{movieData.production_companies[0]?.name || ''}</S.Text>
					</S.Text>

					<S.BasicRowView >
						<S.Text fontWeight={'bold'}>{`Genre: `}</S.Text>
						<FlatList
							horizontal
							data={movieData.genre}
							renderItem={renderGenreItem}
							keyExtractor={item => item.id}
							ListEmptyComponent={<S.Text marginTop={8} marginBottom={8}>cargando...</S.Text>}
						/>				
					</S.BasicRowView>

					<S.Text marginTop={2} marginBottom={2} fontWeight={'bold'}>
						{`Release: `}
						<S.Text>{refYear.current}</S.Text>
					</S.Text>

				</S.MovieDetailView>
			</S.ScreenContainer>
		</Modal>
	);
};

DetailScreen.propTypes = {
	visible: PropTypes.bool,
	onHideModal: PropTypes.func,
	movie: PropTypes.object
};

export default DetailScreen;

