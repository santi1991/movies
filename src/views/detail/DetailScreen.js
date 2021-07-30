import React from 'react';
import { Text, StyleSheet, Alert, Modal, View } from 'react-native';
import PressableView from '../../utilities/commons/components/PressableView';
// import { styles } from '../../utilities/commons/Styles';

const DetailScreen = (props) => {

	const { theme, visible, onHideModal } = props;
	
	return (
		<Modal
			presentationStyle='pageSheet'
			animationType='slide'
			visible={visible}
			onRequestClose={() => {
				Alert.alert('Modal has been closed.');
				onHideModal(!visible);
			}}
		>
			<View style={[styles.centeredView, theme.background]}>
				<View style={[styles.modalView, theme.background]}>
					<Text style={[styles.modalText, theme.text]}>Hello World!</Text>
					<PressableView
						style={[styles.button, styles.buttonClose]}
						onPress={() => onHideModal(!visible)}
					>
						<Text style={styles.textStyle}>Hide Modal</Text>
					</PressableView>
				</View>
			</View>
		</Modal>			
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,        
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	},	
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	modalText: {
		marginBottom: 15,
		textAlign: 'center'
	}
});


export default DetailScreen;

