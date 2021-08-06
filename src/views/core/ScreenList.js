import HomeScreen from '../home/HomeScreen';
import MovieScreen from '../movie/MovieScreen';

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
			headerShown: true,
			title: 'Your Movies',
		}
	},
];
