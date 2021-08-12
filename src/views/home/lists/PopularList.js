import React from 'react';
import { FlatList, Pressable, Alert } from 'react-native';
import { useSelector } from 'react-redux';
// import { selectAllPopular } from '../../utilities/app/slices/popularSlice';
import * as S from '../../../utilities/commons/Styles';
import { createImgUrl } from '../../../utilities/api/moviedb';
import MoviePoster from './MoviePoster';

const PopularList = ({ popularMovies, onPressPoster }) => {

	// console.log('render PopularList');
	// const popularMovies = useSelector(selectAllPopular);
	const theme = useSelector(state => state.theme);	

	const renderMoviePoster = (movie) => {
		const posterImgUrl = createImgUrl(movie.poster_path);
		return (
			<Pressable onPress={() => onPressPoster(movie, 'popular')}>
				<MoviePoster 
					movie={movie} 
					imgUrl={posterImgUrl}
					color={theme.colors.background}
				/>
			</Pressable>
		);
	};

	return (
		<>
			<S.RowView>
				<S.Text>RECOMMENDED FOR YOU</S.Text>
				<S.Text onPress={() => Alert.alert('Hello.')}>See all</S.Text>
			</S.RowView>
			<FlatList
				horizontal
				data={popularMovies}
				renderItem={({ item }) => renderMoviePoster(item)}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>no matches found...</S.Text>}
			/>
		</>
	);
};

const areEqual = (prevProps, nextProps) => {
	return prevProps.onPressPoster === nextProps.onPressPoster;
};

export default React.memo(PopularList, areEqual);

