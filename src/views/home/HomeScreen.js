import React, { useState, useEffect, useRef } from 'react';
import { selectAllPopular } from '../../utilities/app/slices/popularSlice';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import HeaderSection from './HeaderSection';
import ListSection from './ListSection';
import * as S from '../../utilities/commons/Styles';
import PopularList from '../movie/PopularList';
import TopRatedList from '../movie/TopRatedList';

const HomeScreen = ({ navigation, route }) => {
	const count = useRef(0);
	const theme = useSelector((state) => state.theme.theme);
	const popularMovies = useSelector(selectAllPopular);
	// const popularMovies = useSelector((state) => state.popular.popular);
	const topRatedMovies = useSelector((state) => state.topRated.topRated);

	const initialState = {
		popularMovies: popularMovies,
		filteredPopularMovies: popularMovies,
		topRatedMovies: topRatedMovies,
		filteredTopRatedMovies: topRatedMovies
	};

	const [moviesList, setMoviesList] = useState(initialState);

	const [settingsVisible, setSettingsVisible] = useState(false);

	const searchMovie = (filteredPopularResult, filteredTopRatedResult) => {
		setMoviesList({
			...moviesList,
			filteredPopularMovies: filteredPopularResult,
			filteredTopRatedMovies: filteredTopRatedResult
		});
	};

	const onPressPoster = (movie) => {
		navigation.navigate('MovieScreen', { movie });
	};

	

	useEffect(() => {
		count.current++;
		console.log(count.current);
	});

	// useEffect(() => {
	// 	if(popularMovies) {
	// 	  // do something with the item now that we now it exists
	// 	  console.log('popularMovies');
	// 	}
	//   }, [popularMovies]);

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
				<Icon
					name='settings'
					size={21}
					color={theme.colors.background}
				/>
			</S.IconButton>

			<S.HeaderContainer>
				<HeaderSection
					masterPopularList={moviesList.popularMovies}
					masterTopRatedList={moviesList.topRatedMovies}
					onSearch={searchMovie}
				/>
			</S.HeaderContainer>

			<S.ListContainer>
				<PopularList onPressPoster={onPressPoster}/>
				<TopRatedList onPressPoster={onPressPoster}/>				
			</S.ListContainer>
		</S.ScreenContainer>
	);
};

export default HomeScreen;

