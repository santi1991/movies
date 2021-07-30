import styled from 'styled-components/native';
import { colors, colorSelector } from './Colors';

// import { StyleSheet } from 'react-native';


// const selectTextColor = (currentTheme) => {
// 	if (currentTheme === 'dark') {
// 		return colors.dark.text;
// 	}
// 	return colors.light.text;
// };


export const Text = styled.Text`
	color: ${({ theme }) => colorSelector(theme, 'text')};
	font-weight: bold;
	font-size: 15px;
	text-align: center;
`;

export const ScreenContainer = styled.SafeAreaView`
	background-color: ${({ theme }) => colorSelector(theme, 'background')};
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Button = styled.Pressable`
	background-color: ${colors.app.primary};
	border-radius: 10px;
	padding: 10px;
	elevation: 2;
	margin-bottom: 3px;
	margin-top: 3px;
`;



// export const darkTheme = StyleSheet.create({
// 	background: {
// 		backgroundColor: '#212121'
// 	},
// 	surface: {
// 		backgroundColor: '#424242'
// 	},
// 	text: {
// 		color: '#FFFFFF'
// 	}
// });

// export const lightTheme = StyleSheet.create({
// 	background: {
// 		backgroundColor: '#FFFFFF'
// 	},
// 	surface: {
// 		backgroundColor: '#F5F5F5'
// 	},
// 	text: {
// 		color: '#000000'
// 	}
// });


