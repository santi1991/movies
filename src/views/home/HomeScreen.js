import React, { useState, useEffect } from 'react';
// import { Text, StyleSheet } from 'react-native';
import { getMovies } from '../../utilities/api/moviedb';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../utilities/app/reducers/counterReducer';
import DetailScreen from '../detail/DetailScreen';
// import PressableView from '../../utilities/commons/components/PressableView';
// import { styles } from '../../utilities/commons/Styles';
import * as S from '../../utilities/commons/Styles';

const HomeScreen = (props) => {

	const { theme, toggleTheme } = props;

	const count = useSelector((state) => state.counter.value);

	const dispatch = useDispatch();
	console.log(count);

	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		getMovies()
			.then((response) => {

				console.log(response.data.page);
				console.log(response.data.total_pages);
				console.log(response.data.total_results);
				for (let i of response.data.results) {
					console.log(i);
				}

				alert('success!');
				// console.log(response.data);

				//response.data.page
				//response.data.results
				//response.data.total_pages
				//response.data.total_results
			})
			.catch(() => {
				alert('ERROR!');
			});
			// .finally(() => {

			// });
	}, []);

	return (
		<S.ScreenContainer theme={theme}>

			<S.Text theme={theme}>Styled Component</S.Text>

			<S.Text theme={theme}>{count}</S.Text>

			<S.Button onPress={() => setModalVisible(true)}>
				<S.Text theme={theme}>Show Modal</S.Text>
			</S.Button>

			<S.Button onPress={() => dispatch(increment())}>
				<S.Text theme={theme}>Increment</S.Text>
			</S.Button>


			<S.Button onPress={() => dispatch(decrement())}>
				<S.Text theme={theme}>Decrement</S.Text>
			</S.Button>

			<S.Button onPress={() => toggleTheme('dark')}>
				<S.Text theme={theme}>DARK</S.Text>
			</S.Button>

			<S.Button onPress={() => toggleTheme('light')}>
				<S.Text theme={theme}>LIGHT</S.Text>
			</S.Button>

			{
				modalVisible &&
				<DetailScreen
					theme={theme}
					visible={modalVisible}
					onHideModal={setModalVisible}
				/>
			}

		</S.ScreenContainer>
	);
};

export default HomeScreen;


/*
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
*/