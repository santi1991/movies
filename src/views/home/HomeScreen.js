import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from '../../utilities/app/reducers/counterReducer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Settings from './Settings';
// import DetailScreen from '../detail/DetailScreen';
import HeaderSection from './HeaderSection';
import ListSection from './ListSection';
import * as S from '../../utilities/commons/Styles';

const HomeScreen = (props) => {

	const { theme, toggleTheme } = props;

	// const dispatch = useDispatch();
	// const count = useSelector((state) => state.counter.value);
	const topRatedMovies = useSelector((state) => state.movies.topRated);
	
	// const [modalVisible, setModalVisible] = useState(false);
	const [settingsVisible, setSettingsVisible] = useState(false);

	return (
		<S.ScreenContainer theme={theme}>

			<S.IconButton onPress={() => setSettingsVisible(true)} align_self={'flex-end'}>
				<Icon name='settings' size={21} color={theme === 'dark' ? 'white' : 'black'} />
			</S.IconButton>

			<S.HeaderContainer theme={theme}>
				<HeaderSection
					theme={theme}
				/>
			</S.HeaderContainer>

			<S.ListContainer theme={theme}>

				<ListSection
					theme={theme}
					topRated={topRatedMovies}
				/>

				

								
				{
					settingsVisible &&
					<Settings
						visible={settingsVisible}
						theme={theme}
						onHideModal={setSettingsVisible}
						onToggleTheme={toggleTheme}
					/>
				}


			</S.ListContainer>

			{/* {
				modalVisible &&
				<DetailScreen
					theme={theme}
					visible={modalVisible}
					onHideModal={setModalVisible}
				/>
			} */}

		</S.ScreenContainer>
	);
};

export default HomeScreen;

/*
<S.Button onPress={() => setModalVisible(true)}>
				<S.Text theme={theme}>Show Modal</S.Text>
			</S.Button>



			<S.Button onPress={() => toggleTheme('dark')}>
				<S.Text theme={theme}>DARK</S.Text>
			</S.Button>

			<S.Button onPress={() => toggleTheme('light')}>
				<S.Text theme={theme}>LIGHT</S.Text>
			</S.Button>
*/

/*
--------------------------------------------------------
--------------------------------------------------------
<S.Text theme={theme}>{count}</S.Text>
<S.Button onPress={() => dispatch(increment())}>
	<S.Text theme={theme}>Increment</S.Text>
</S.Button>


<S.Button onPress={() => dispatch(decrement())}>
	<S.Text theme={theme}>Decrement</S.Text>
</S.Button>
--------------------------------------------------------
--------------------------------------------------------
*/


/*
--------------------------------------------------------
--------------------------------------------------------
<PressableView
	style={[styles.button, styles.buttonOpen]}
	onPress={() => setModalVisible(true)}
>
	<Text style={styles.textStyle}>Show Modal</Text>
</PressableView>
<PressableView
	style={[styles.button, styles.buttonOpen]}
	onPress={() => dispatch(increment())}
>
	<Text style={styles.textStyle}>Increment</Text>
</PressableView>

<PressableView
	style={[styles.button, styles.buttonOpen]}
	onPress={() => dispatch(decrement())}
>
	<Text style={styles.textStyle}>Decrement</Text>
</PressableView>

<PressableView
	style={[styles.button, styles.buttonOpen]}
	onPress={() => toggleTheme('light')}
>
	<Text style={styles.textStyle}>LIGHT</Text>
</PressableView>
--------------------------------------------------------
--------------------------------------------------------
*/