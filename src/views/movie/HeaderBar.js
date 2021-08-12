import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as S from '../../utilities/commons/Styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { selectFavoriteById, addFavoriteMovie, deleteFavoriteMovie } from '../../utilities/app/slices/favoritesSlice';


const HeaderBar = ({ movie, handleBackButton }) => {
	
	const dispatch = useDispatch();
	const favoriteMovie = useSelector(state => selectFavoriteById(state, movie.id));

	const handleLike = () => {
		if (favoriteMovie) {
			console.log('movie deleted');
			dispatch(deleteFavoriteMovie(movie.id));
		}
		else {
			console.log('movie added');
			dispatch(addFavoriteMovie(movie));
		}
	};

	const heartIcon = favoriteMovie ? 'favorite' : 'favorite-border';
	const heartIconColor = favoriteMovie ? 'red' : 'white';


	return (
		<S.RowViewAbsolute>
			<S.IconButton onPress={handleBackButton} transparent>
				<Icon name='arrow-back' size={26} color='white' />
			</S.IconButton>

			<S.IconButton onPress={handleLike} transparent>
				<Icon
					size={26}
					name={heartIcon}
					color={heartIconColor}
				/>
			</S.IconButton>
		</S.RowViewAbsolute>
	);
};

HeaderBar.propTypes = {
	movie: PropTypes.object,
	handleBackButton: PropTypes.func
};

export default HeaderBar;