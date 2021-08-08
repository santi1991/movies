import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'react-native-ratings';
import * as S from '../../utilities/commons/Styles';

const MoviePoster = ({ movie, imgUrl, color }) => {

	return (
		<S.MovieItemVew>
			<S.PosterImage source={{ uri: imgUrl }} />
			<S.Text marginTop={4} marginBottom={4}>{movie.title}</S.Text>
			<Rating
				imageSize={17}
				readonly={true}
				startingValue={movie.vote_average / 2}
				tintColor={color} // theme.colors.background
				style={{ alignSelf: 'flex-start' }}
			/>
		</S.MovieItemVew>
	);
};

MoviePoster.propTypes = {
	movie: PropTypes.object,
	imgUrl: PropTypes.string,
	color: PropTypes.string
};

export default MoviePoster;

