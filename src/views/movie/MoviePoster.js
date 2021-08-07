import React from 'react';
import { Pressable } from 'react-native';
import PropTypes from 'prop-types';
import { createImgUrl } from '../../utilities/api/moviedb';
import { Rating } from 'react-native-ratings';
import * as S from '../../utilities/commons/Styles';

const MoviePoster = ({ movie, onPress }) => {

	const posterImgUrl = createImgUrl(movie.poster_path);

	return (
		<S.MovieItemVew>
			<Pressable onPress={() => onPress(movie)}>
				<S.PosterImage source={{ uri: posterImgUrl }} />
			</Pressable>

			<S.Text marginTop={4} marginBottom={4}>{movie.title}</S.Text>
			<Rating
				imageSize={17}
				readonly={true}
				startingValue={movie.vote_average / 2}
				// tintColor={theme.colors.background}
				tintColor='white'
				style={{ alignSelf: 'flex-start' }}
			/>
		</S.MovieItemVew>
	);
};

MoviePoster.propTypes = {
	movie: PropTypes.object
};

export default MoviePoster;

