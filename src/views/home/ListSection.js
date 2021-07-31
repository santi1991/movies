import React, { useState, useRef } from 'react';
import { Rating } from 'react-native-ratings';
import { colors } from '../../utilities/commons/Colors';
import { FlatList, View, StyleSheet, Image, Alert, Pressable } from 'react-native';
import * as S from '../../utilities/commons/Styles';
import { createImgUrl } from '../../utilities/api/moviedb';
import DetailScreen from '../detail/DetailScreen';

const ListSection = ({ topRated, theme }) => {

	const refMovie = useRef({});
	const [modalVisible, setModalVisible] = useState(false);

	const openMovieDetails = (movie) => {
		refMovie.current = movie;
		setModalVisible(true);
	};


	const renderMovieItem = ({ item }) => {
		const imgUrl = createImgUrl(item.poster_path);
		return (
			<View style={styles.itemContainer}>

				<Pressable
					onPress={() => openMovieDetails(item)}
					style={styles.imgContainer}
				>
					<Image
						style={styles.imgSize}
						source={{ uri: imgUrl }}
					/>
				</Pressable>
				
				<S.Text theme={theme} >{item.title}</S.Text>
				<Rating
					imageSize={18}
					readonly={true}
					startingValue={item.vote_average / 2}
					tintColor={theme === 'dark' ? colors.dark.background : colors.light.background}
				/>
			</View>
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
				data={topRated}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
			/>

			<S.RowView>
				<S.Text theme={theme}>TOP RATED</S.Text>
				<S.Text theme={theme} onPress={() => Alert.alert('Hello.')} >See all</S.Text>
			</S.RowView>

			<FlatList
				horizontal
				data={topRated}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	imgContainer: {
		padding: 1,
	},
	itemContainer: {
		backgroundColor: 'transparent',       
		height: 185,
		width: 150,
		margin: 3
	},
	imgSize: {
		height: 175,
		width: 130,
		borderRadius: 14
	},
});

export default ListSection;

/*
<View style={styles.imgContainer} >
                    <Image
                        style={styles.imgSize}
                        source={{ uri: imgUrl }}
                    />
                </View> 
*/