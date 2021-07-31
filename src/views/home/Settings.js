import React from 'react';
import { Alert, Modal, StyleSheet, View } from 'react-native';
import * as S from '../../utilities/commons/Styles';

const Settings = ({ visible, theme, onHideModal, onToggleTheme }) => {


	return (
		<View style={styles.centeredView}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={visible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
					onHideModal(!visible);
				}}
			>
				<View style={styles.centeredView}>
					<S.ModalView theme={theme} >

						<S.Button onPress={() => onToggleTheme('dark')}>
							<S.Text theme={theme}>DARK</S.Text>
						</S.Button>

						<S.Button onPress={() => onToggleTheme('light')}>
							<S.Text theme={theme}>LIGHT</S.Text>
						</S.Button>

						<S.Button theme={theme} onPress={() => onHideModal(!visible)}>
							<S.Text theme={theme}>Close</S.Text>
						</S.Button>

					</S.ModalView>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		marginTop: 50
	},
});

export default Settings;