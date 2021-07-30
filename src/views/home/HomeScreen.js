import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../utilities/app/reducers/counterReducer';
import DetailScreen from '../detail/DetailScreen';
import PressableView from '../../utilities/commons/components/PressableView';
// import { styles } from '../../utilities/commons/Styles';

const HomeScreen = (props) => {

	const { theme, toggleTheme } = props;

	const count = useSelector((state) => state.counter.value);

	const dispatch = useDispatch();
	console.log(count);

	const [modalVisible, setModalVisible] = useState(false);

	return (
		<SafeAreaView style={styles.centeredView}>
			<Text style={[styles.textStyle, theme.text]}>{count}</Text>
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
				onPress={() => toggleTheme('dark')}
			>
				<Text style={styles.textStyle}>DARK</Text>
			</PressableView>

			<PressableView
				style={[styles.button, styles.buttonOpen]}
				onPress={() => toggleTheme('light')}
			>
				<Text style={styles.textStyle}>LIGHT</Text>
			</PressableView>

			{
				modalVisible && 
                    <DetailScreen 
                    	theme={theme}
                    	visible={modalVisible} 
                    	onHideModal={setModalVisible} 
                    />
			}
            
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,        
	},	
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginBottom:3,
		marginTop:3
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},	
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},	
});


export default HomeScreen;

