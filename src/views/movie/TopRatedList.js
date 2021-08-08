import React from 'react';
import { FlatList, Pressable, Alert } from 'react-native';
import { useSelector } from 'react-redux';
// import { selectAllTopRated } from '../../utilities/app/slices/topRatedSlice';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl } from '../../utilities/api/moviedb';
import MoviePoster from './MoviePoster';

const TopRatedList = ({ topRatedMovies, onPressPoster }) => {

	// console.log('render TopRatedList');
	// const topRatedMovies = useSelector(selectAllTopRated);
	const theme = useSelector(state => state.theme);

	const renderMoviePoster = (movie) => {
		const posterImgUrl = createImgUrl(movie.poster_path);
		return (
			<Pressable onPress={() => onPressPoster(movie, 'topRated')}>
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
				<S.Text>TOP RATED</S.Text>
				<S.Text onPress={() => Alert.alert('Fetch page 2 ')} >See all</S.Text>
			</S.RowView>
			<FlatList
				horizontal
				data={topRatedMovies}
				renderItem={props => renderMoviePoster(props.item)}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>no matches found...</S.Text>}
			/>
		</>
	);
};

const areEqual = (prevProps, nextProps) => {
	return prevProps.onPressPoster === nextProps.onPressPoster;
};

export default React.memo(TopRatedList, areEqual);

