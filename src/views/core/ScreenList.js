import HomeScreen from '../home/HomeScreen';
import MovieScreen from '../movie/MovieScreen';
import FavoritesScreen from '../favorites/FavoritesScreen';
/**
 *  screen options
 * {
    id: 0,
    name: 'SignIn',
    options: {},
    initialParams: {},
    getId: {},
    component: SignIn,            
    getComponent: {}
},
 */

export const contentScreens = [
	{
		id: 'HomeScreen',
		name: 'HomeScreen',
		component: HomeScreen,
	},
	{
		id: 'MovieScreen',
		name: 'MovieScreen',
		component: MovieScreen,
		options: {
			// headerShown: true,
			// title: 'Your Movies',
			// headerTransparent: true,
		}
	},
	{
		id: 'FavoritesScreen',
		name: 'FavoritesScreen',
		component: FavoritesScreen,
		options: {
			headerShown: true,
			title: 'Your Favorites',
			headerTransparent: true,
		}
	},
];
