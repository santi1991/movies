import React, { useState, useEffect } from 'react';
import { selectCurrentTheme } from '../../utilities/app/slices/themeSlice';
import { selectAllPopular } from '../../utilities/app/slices/popularSlice';
import { selectAllTopRated } from '../../utilities/app/slices/topRatedSlice';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
import HeaderSection from './HeaderSection';
import * as S from '../../utilities/commons/Styles';
import PopularList from './lists/PopularList';
import TopRatedList from './lists/TopRatedList';

const HomeScreen = ({ navigation, route }) => {

	// const count = useRef(0);
	const theme = useSelector(selectCurrentTheme);

	const popularMovies = useSelector(selectAllPopular);
	const topRatedMovies = useSelector(selectAllTopRated);

	const [settingsVisible, setSettingsVisible] = useState(false);

	const initialState = {
		filteredPopular: popularMovies,
		filteredTopRated: topRatedMovies
	};
	const [filtered, setFiltered] = useState(initialState);

	const searchMovie = (popularResult, topRatedResult) => {
		setFiltered({
			...filtered,
			filteredPopular: popularResult,
			filteredTopRated: topRatedResult
		});
	};

	const handlePressPoster = (movie) => {
		navigation.navigate('MovieScreen', { movieId: movie.id });
	};

	// const handlePressPoster = useCallback((movie) => {
	// 	navigation.navigate('MovieScreen', { movie });
	// }, [navigation]);
	useEffect(() => {
		console.log('HomeScreen mounted');
		return () => {
			console.log('HomeScreen UNMOUNTED');
		};
	});


	return (
		<S.ScreenContainer>
			<S.ScreenScrollView contentContainerStyle={{ flexGrow: 1 }} >

				<Settings
					visible={settingsVisible}
					onHideModal={setSettingsVisible}
				/>

				<S.RowView>
					<S.IconButton
						onPress={() => navigation.navigate('FavoritesScreen')}
						alignSelf={'flex-start'}
					>
						<Icon
							name='favorite'
							size={21}
							color={theme.colors.background}
						/>
					</S.IconButton>

					<S.IconButton
						onPress={() => setSettingsVisible(true)}
						alignSelf={'flex-end'}
					>
						<Icon
							name='more-vert'
							size={30}
							color={theme.colors.background}
						/>
					</S.IconButton>

				</S.RowView>

				<S.HeaderContainer>
					<HeaderSection
						masterPopularList={popularMovies}
						masterTopRatedList={topRatedMovies}
						onSearch={searchMovie}
					/>
				</S.HeaderContainer>

				<S.ListContainer>
					<PopularList
						popularMovies={filtered.filteredPopular}
						onPressPoster={handlePressPoster}
					/>
					<TopRatedList
						topRatedMovies={filtered.filteredTopRated}
						onPressPoster={handlePressPoster}
					/>
				</S.ListContainer>

			</S.ScreenScrollView>
		</S.ScreenContainer>
	);
};

export default HomeScreen;

