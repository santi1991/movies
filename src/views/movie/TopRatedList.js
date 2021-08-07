import React from 'react';
import { FlatList, Pressable, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { selectAllTopRated } from '../../utilities/app/slices/topRatedSlice';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl } from '../../utilities/api/moviedb';

const TopRatedList = ({ onPressPoster }) => {

	const topRatedMovies = useSelector(selectAllTopRated);

	const renderMoviePoster = ({ item }) => {
		const imgUrl = createImgUrl(item.poster_path);
		return (
			<S.MovieItemVew>
				<Pressable onPress={() => onPressPoster(item)}>
					<S.PosterImage source={{ uri: imgUrl }} />
				</Pressable>

				<S.Text marginTop={4} marginBottom={4}>{item.title}</S.Text>
				<Rating
					imageSize={17}
					readonly={true}
					startingValue={item.vote_average / 2}
					// tintColor={theme.colors.background}
					tintColor='white'
					style={{ alignSelf: 'flex-start' }}
				/>
			</S.MovieItemVew>
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
				renderItem={renderMoviePoster}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>no matches found...</S.Text>}
			/>
		</>
	);
};

export default TopRatedList;

