import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import HeaderSection from './HeaderSection';
import ListSection from './ListSection';
import * as S from '../../utilities/commons/Styles';
import { ScrollView } from 'react-native';

const HomeScreen = ({ theme, toggleTheme }) => {
	
	const popularMovies = useSelector((state) => state.movies.popular);
	const topRatedMovies = useSelector((state) => state.movies.topRated);
	
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
		<S.ScreenContainer theme={theme}>
			<ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps='never'>

				<Settings
					visible={settingsVisible}
					theme={theme}
					onHideModal={setSettingsVisible}
					onToggleTheme={toggleTheme}
				/>

				<S.IconButton onPress={() => setSettingsVisible(true)} alignSelf={'flex-end'}>
					<Icon name='settings' size={21} color={theme === 'dark' ? 'white' : 'black'} />
				</S.IconButton>

				<S.HeaderContainer theme={theme}>
					<HeaderSection
						theme={theme}
						masterPopularList={moviesList.popularMovies}
						masterTopRatedList={moviesList.topRatedMovies}
						onSearch={searchMovie}
					/>
				</S.HeaderContainer>

				<S.ListContainer theme={theme}>
					<ListSection
						theme={theme}
						// popular={popularMovies}
						// topRated={topRatedMovies}
						popular={moviesList.filteredPopularMovies}
						topRated={moviesList.filteredTopRatedMovies}
					/>
				</S.ListContainer>

			</ScrollView>
		</S.ScreenContainer>
	);
};

export default HomeScreen;

