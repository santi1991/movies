import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, FlatList, Pressable, View } from 'react-native';
import { createImgUrl } from '../../utilities/api/moviedb';
import * as S from '../../utilities/commons/Styles';
import MoviePoster from '../home/lists/MoviePoster';

const FavoritesScreen = ({ navigation, route }) => {

	const theme = useSelector(state => state.theme);
	const favoriteMovies = useSelector(state => state.favorites);

	const renderMoviePoster = (movie) => {
		const posterImgUrl = createImgUrl(movie.poster_path);
		return (
			<Pressable onPress={() => navigation.navigate('MovieScreen', { movieId: movie.id })}>
				<MoviePoster
					movie={movie}
					imgUrl={posterImgUrl}
					color={theme.colors.background}
				/>
			</Pressable>
		);
	};

	return (
		<S.ScreenContainer>
			<View style={{ marginTop: 50 }} />
			<FlatList
				numColumns={2}
                // horizontal
				data={favoriteMovies}
				renderItem={({ item }) => renderMoviePoster(item)}
				keyExtractor={item => item.id}
				ListEmptyComponent={<S.Text>No tienes peliculas favoritas...</S.Text>}
			/>
		</S.ScreenContainer>
	);
};

export default FavoritesScreen;