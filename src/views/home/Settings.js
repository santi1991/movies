import React from 'react';
import { Modal } from 'react-native';
import { colors } from '../../utilities/commons/Colors';
import * as S from '../../utilities/commons/Styles';

const Settings = ({ visible, theme, onHideModal, onToggleTheme }) => {

	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => onHideModal(!visible)}
		>
			<S.ModalView theme={theme} >

				<S.Title theme={theme}>Select Theme</S.Title>

				<S.Button onPress={() => onToggleTheme('dark')}>
					<S.Text theme={theme}>DARK Theme</S.Text>
				</S.Button>

				<S.Button onPress={() => onToggleTheme('light')}>
					<S.Text theme={theme}>LIGHT Theme</S.Text>
				</S.Button>

				<S.Button theme={theme} backgroundColor={colors.app.secondary} onPress={() => onHideModal(!visible)}>
					<S.Text theme={theme}>Close</S.Text>
				</S.Button>

			</S.ModalView>
		</Modal>
	);
};

export default Settings;