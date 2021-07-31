import styled from 'styled-components/native';
import { colors, colorSelector } from './Colors';

// import { StyleSheet } from 'react-native';


// const selectTextColor = (currentTheme) => {
// 	if (currentTheme === 'dark') {
// 		return colors.dark.text;
// 	}
// 	return colors.light.text;
// };
export const ScreenContainer = styled.SafeAreaView`
	background-color: ${({ theme }) => colorSelector(theme, 'surface')};
	flex: 1;	
`;

export const HeaderContainer = styled.View`
	background-color: ${({ theme }) => colorSelector(theme, 'surface')};
	flex: 1;
	align-items: center;
 	justify-content: center;
`;
export const ListContainer = styled.View`
	background-color: ${({ theme }) => colorSelector(theme, 'background')};
	flex: 4;
	padding: 15px;
	elevation: 5;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
`;

// export const ImgBackground = styled.View`
// 	background: url(${({ imgUrl }) => (imgUrl)}); 
// 	flex: 2;
// `;

export const ModalView = styled.View`
	background-color: ${({ theme }) => colorSelector(theme, 'surface')};
	margin: 20px;
	borderRadius: 20px;
	padding: 35px;
	align-items: center;
	box-shadow: 5px 10px #888888;		
	elevation: 5;
`;

export const RowView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 10px 5px 10px 5px;
`;

export const RowViewAbsolute = styled(RowView)`
	position: absolute;
	zIndex : 1;
`;

export const Caption = styled.Text`
	color: ${({ theme }) => colorSelector(theme, 'text')};	
	font-size: 12px;
	text-align: ${props => props?.text_align || 'center'};
`;

export const Text = styled(Caption)`
	font-size: 14px;
	text-align: ${props => props?.text_align || 'center'};
`;

export const SubHeading = styled(Caption)`
	font-size: 16px;
	font-weight: bold;
`;

export const Title = styled(Caption)`
	font-size: 20px;
	font-weight: bold;
`;

export const Headline = styled(Caption)`
	font-size: 22px;
	font-weight: bold;
`;



export const Button = styled.Pressable`
	background-color: ${colors.app.primary};	
	border-radius: 10px;
	padding: 10px;
	elevation: 4;	
	margin: 4px
`;

export const IconButton = styled(Button)`
	background-color: ${props => props.transparent ? 'transparent' : colors.app.primary}
	align-items: center;
	justify-content: center;
	margin-right: ${props => props?.margin_left || '5'}px
	align-self: ${props => props?.align_self || 'auto'}
	width: 40px;
	border-radius: 50px;
`;

// export const IconButtonAbs = styled(IconButton)`
// 	position: absolute;
// 	zIndex : 1;
// `;

//align-self: flex-end;
// align-items: center;
// 	justify-content: center;
// margin-bottom: 3px;
	//margin-top: 3px;
	// shadowColor: '#000',
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 2
	// 	},
	// 	shadowOpacity: 0.25,
	// 	shadowRadius: 4,



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


