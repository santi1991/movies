import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, Modal, View, Image, useWindowDimensions, FlatList } from 'react-native';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../utilities/commons/Colors';

import * as S from '../../utilities/commons/Styles';
import { createImgUrl, getCredits } from '../../utilities/api/moviedb';

const DetailScreen = ({ theme, visible, onHideModal, movie }) => {

	const [cast, setCast] = useState([]);
	const movieImgUrl = createImgUrl(movie.backdrop_path);
	const windowWidth = useWindowDimensions().width;
	const x = windowWidth - 110;

	const renderCastItem = ({ item }) => {
		const castImgUrl = createImgUrl(item.profile_path);
		return (
			<View style={styles.itemContainer}>

				<Image
					style={styles.castImg}
					source={{ uri: castImgUrl }}
				/>

				<S.Text theme={theme} text_align={'center'}>{item.name}</S.Text>

			</View>
		);
	};

	useEffect(() => {
		getCredits(movie.id)
			.then((data) => {
				// console.log(data.cast);
				const mainCast = [];
				for (let i = 0; i < 4; i++) {
					mainCast.push(data.cast[i]);
				}
				setCast(mainCast);
				// for (let i of response.data.results) {
				// 	console.log(i);
				// }				
			})
			.catch((error) => {
				console.log(error);
				alert('ERROR!');
			});
	}, []);

	return (
		<Modal
			presentationStyle='pageSheet'
			animationType='slide'
			visible={visible}
			onRequestClose={() => onHideModal(!visible)}
		>
			<S.ScreenContainer theme={theme}>

				<S.RowViewAbsolute>

					<S.IconButton onPress={() => onHideModal(!visible)} margin_left={x.toString()} transparent>
						<Icon name='arrow-back' size={24} color='white' />
					</S.IconButton>

					<S.IconButton onPress={() => Alert.alert('You loved this movie!')} transparent>
						<Icon name='favorite-border' size={22} color='white' />
					</S.IconButton>

				</S.RowViewAbsolute>

				<Image
					style={styles.imgSize}
					source={{ uri: movieImgUrl }}
				/>

				<View style={styles.movieContainer}>

					<View style={styles.rowContainer}>
						<S.Headline theme={theme}>{movie.title} </S.Headline>
						<Icon name='movie-filter' size={22} color='grey' />
					</View>

					<View style={styles.rowContainer}>

						<S.Button onPress={() => Alert.alert('You wanna watch this movie!')}>
							<S.Text theme={theme}>WATCH NOW</S.Text>
						</S.Button>

						<Rating
							imageSize={18}
							readonly={true}
							startingValue={movie.vote_average / 2}
							tintColor={theme === 'dark' ? colors.dark.surface : colors.light.surface}
						/>

					</View>

					<S.Text theme={theme} text_align={'center'} >{movie.overview} </S.Text>
					
					<FlatList
						horizontal
						data={cast}
						renderItem={renderCastItem}
						keyExtractor={item => item.id}
						ListEmptyComponent={<S.Text theme={theme}>cargando...</S.Text>}
					/>

					<S.Text theme={theme}>Studio: </S.Text>
					<S.Text theme={theme}>Genre: </S.Text>
					<S.Text theme={theme}>Release: </S.Text>

				</View>



			</S.ScreenContainer>
		</Modal>
	);
};

const styles = StyleSheet.create({
	imgSize: {
		height: '35%',
		width: '100%',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	movieContainer: {
		// justifyContent: 'space-evenly',
		margin: 30,
		// marginLeft: 30,
		// marginRight: 30,		
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 4,
		marginTop: 4
	},
	itemContainer: {
		backgroundColor: 'transparent',
		height: 90,
		width: 80,
		margin: 1,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	castImg: {
		height: 60,
		width: 60,
		borderRadius: 60
	}
});

export default DetailScreen;

