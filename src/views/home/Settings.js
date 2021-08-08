import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-native';
import { setDarkTheme, setLightTheme } from '../../utilities/app/slices/themeSlice';

import * as S from '../../utilities/commons/Styles';

const Settings = ({ visible, onHideModal }) => {

	const dispatch = useDispatch();

	const onToggleTheme = (selectedTheme) => {
		if (selectedTheme === 'dark') {
			dispatch(setDarkTheme());
		} 
		else {
			dispatch(setLightTheme());
		}
		onHideModal(!visible);
	};
	
	return (
		<Modal
			animationType='slide'
			transparent={true}
			visible={visible}
			onRequestClose={() => onHideModal(!visible)}
		>
			<S.ModalView>

				<S.Title>Select Theme</S.Title>

				<S.Button onPress={() => onToggleTheme('dark')}>
					<S.Text>DARK Theme</S.Text>
				</S.Button>

				<S.Button onPress={() => onToggleTheme('light')}>
					<S.Text>LIGHT Theme</S.Text>
				</S.Button>

				<S.ButtonClose onPress={() => onHideModal(!visible)}>
					<S.Text>Close</S.Text>
				</S.ButtonClose>

			</S.ModalView>
		</Modal>
	);
};

Settings.propTypes = {
	visible: PropTypes.bool,
	onHideModal: PropTypes.func
};

export default Settings;