import React, { useState, useEffect } from 'react';
import { Alert, Modal, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPopularById } from '../../utilities/app/slices/popularSlice';
import { selectTopRatedById } from '../../utilities/app/slices/topRatedSlice';
import { createImgUrl } from '../../utilities/api/moviedb';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from '../../utilities/commons/Styles';

const MovieScreen = ({ navigation, route }) => {

	// const theme = useSelector((state) => state.theme.theme);

	const movie = useSelector(state =>
		route.params.type === 'popular' ? selectPopularById(state, route.params.movieId) :
			selectTopRatedById(state, route.params.movieId)
	);
	const backdropImgUrl = createImgUrl(movie.backdrop_path);

	// console.log(movie);
	// console.log(route.params.type);

	const [like, setLike] = useState(false);
	const toggleLike = () => setLike(!like);

	const heartIcon = like === true ? 'favorite' : 'favorite-border';
	const heartIconColor = like === true ? 'red' : 'white';


	useEffect(() => {
		console.log('MovieScreen mounted');
		return () => {
			console.log('MovieScreen UNMOUNTED');
		};
	}, []);

	return (
		<S.ScreenContainer>

			<S.RowViewAbsolute>
				<S.IconButton onPress={() => navigation.goBack()}  transparent>
					<Icon name='arrow-back' size={26} color='white' />
				</S.IconButton>

				<S.IconButton onPress={toggleLike} transparent>
					<Icon name={heartIcon} size={26} color={heartIconColor} />
				</S.IconButton>
			</S.RowViewAbsolute>

			<S.BackdropImage source={{ uri: backdropImgUrl }} />

		</S.ScreenContainer>
	);
};

export default MovieScreen;

