import React, { useState, useRef } from 'react';
import { Rating } from 'react-native-ratings';
import { colors } from '../../utilities/commons/Colors';
import { FlatList, Alert, Pressable } from 'react-native';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl } from '../../utilities/api/moviedb';
import DetailScreen from '../detail/DetailScreen';

const ListSection = ({ theme, popular, topRated }) => {

	const refMovie = useRef({});
	const [modalVisible, setModalVisible] = useState(false);

	const openMovieDetails = (movie) => {
		refMovie.current = movie;
		// console.log(movie);		
		setModalVisible(true);
	};

	const renderMovieItem = ({ item }) => {
		const imgUrl = createImgUrl(item.poster_path);
		return (
			<S.MovieItemVew>
				<Pressable onPress={() => openMovieDetails(item)}>
					<S.PosterImage source={{ uri: imgUrl }}/>
				</Pressable>

				<S.Text theme={theme} marginTop={4} marginBottom={4}>{item.title}</S.Text>
				<Rating
					imageSize={17}
					readonly={true}
					startingValue={item.vote_average / 2}
					tintColor={theme === 'dark' ? colors.dark.background : colors.light.background}
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
					theme={theme}
					movie={refMovie.current}
					visible={modalVisible}
					onHideModal={setModalVisible}
				/>
			}
			<S.RowView>
				<S.Text theme={theme}>RECOMMENDED FOR YOU</S.Text>
				<S.Text theme={theme} onPress={() => Alert.alert('Hello.')}>See all</S.Text>
			</S.RowView>

			<FlatList
				horizontal
				data={popular}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text theme={theme}>no matches found...</S.Text>}
			/>

			<S.RowView>
				<S.Text theme={theme}>TOP RATED</S.Text>
				<S.Text theme={theme} onPress={() => Alert.alert('Fetch page 2 ')} >See all</S.Text>
			</S.RowView>

			<FlatList
				horizontal
				data={topRated}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text theme={theme}>no matches found...</S.Text>}
			/>
		</>
	);
};

export default ListSection;
