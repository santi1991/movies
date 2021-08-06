import React, { useState } from 'react';
import { selectAllPopular } from '../../utilities/app/slices/popularSlice';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import HeaderSection from './HeaderSection';
import ListSection from './ListSection';
import * as S from '../../utilities/commons/Styles';

const HomeScreen = () => {
	const theme = useSelector((state) => state.theme.theme);
	const { page, popularMovies } = useSelector(selectAllPopular);
	console.log(page);
	const topRatedMovies = useSelector((state) => state.topRated.topRated);

	const initialState = {
		popularMovies: popularMovies,
		filteredPopularMovies: popularMovies,
		topRatedMovies: topRatedMovies,
		filteredTopRatedMovies: topRatedMovies
	};

	const [moviesList, setMoviesList] = useState(initialState);

	const searchMovie = (filteredPopularResult, filteredTopRatedResult) => {
		setMoviesList({
			...moviesList,
			filteredPopularMovies: filteredPopularResult,
			filteredTopRatedMovies: filteredTopRatedResult
		});
	};

	const [settingsVisible, setSettingsVisible] = useState(false);

	return (
		<S.ScreenContainer>
			<Settings
				visible={settingsVisible}
				onHideModal={setSettingsVisible}
			/>

			<S.IconButton 
				onPress={() => setSettingsVisible(true)} 
				alignSelf={'flex-end'}
			>
				<Icon name='settings' size={21} color={theme.colors.background} />
			</S.IconButton>

			<S.HeaderContainer>
				<HeaderSection
					masterPopularList={moviesList.popularMovies}
					masterTopRatedList={moviesList.topRatedMovies}
					onSearch={searchMovie}
				/>
			</S.HeaderContainer>

			<S.ListContainer>
				<ListSection
					popular={moviesList.filteredPopularMovies}
					topRated={moviesList.filteredTopRatedMovies}
				/>
			</S.ListContainer>
		</S.ScreenContainer>
	);
};

export default HomeScreen;

