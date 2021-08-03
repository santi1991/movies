import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { FlatList, Alert, Pressable } from 'react-native';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl } from '../../utilities/api/moviedb';
import DetailScreen from '../detail/DetailScreen';


const ListSection = ({ popular, topRated }) => {

	const refMovie = useRef({});
	const [modalVisible, setModalVisible] = useState(false);

	const theme = useSelector((state) => state.theme.theme);

	const openMovieDetails = (movie) => {
		refMovie.current = movie;
		setModalVisible(true);
	};

	const renderMovieItem = ({ item }) => {
		const imgUrl = createImgUrl(item.poster_path);
		return (
			<S.MovieItemVew>
				<Pressable onPress={() => openMovieDetails(item)}>
					<S.PosterImage source={{ uri: imgUrl }}/>
				</Pressable>

				<S.Text marginTop={4} marginBottom={4}>{item.title}</S.Text>
				<Rating
					imageSize={17}
					readonly={true}
					startingValue={item.vote_average / 2}
					tintColor={theme.colors.background}
					style={{ alignSelf: 'flex-start' }}
				/>
			</S.MovieItemVew>
		);
	};

	return (
		<>
			{
				modalVisible &&
				<DetailScreen
					movie={refMovie.current}
					visible={modalVisible}
					onHideModal={setModalVisible}
				/>
			}
			<S.RowView>
				<S.Text>RECOMMENDED FOR YOU</S.Text>
				<S.Text onPress={() => Alert.alert('Hello.')}>See all</S.Text>
			</S.RowView>

			<FlatList
				horizontal
				data={popular}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>no matches found...</S.Text>}
			/>

			<S.RowView>
				<S.Text>TOP RATED</S.Text>
				<S.Text onPress={() => Alert.alert('Fetch page 2 ')} >See all</S.Text>
			</S.RowView>

			<FlatList
				horizontal
				data={topRated}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>no matches found...</S.Text>}
			/>
		</>
	);
};

ListSection.propTypes = {
	popular: PropTypes.array,
	topRated: PropTypes.array,
};

export default ListSection;
