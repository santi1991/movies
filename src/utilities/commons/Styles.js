import styled from 'styled-components/native';

/**
 * View Styles
 */
export const ScreenContainer = styled.SafeAreaView`
	background-color: ${(props)  => props.theme.colors.background};
	flex: 1;	
`;

export const ScreenScrollView = styled.ScrollView`
	background-color: ${(props)  => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
	background-color: ${(props)  => props.theme.colors.background};
	flex-grow: 1;
	align-items: center;
 	justify-content: space-around;
`;

export const ListContainer = styled.View`
	background-color: ${(props)  => props.theme.colors.surface};
	flex-grow: 4;
	padding: 15px;
	elevation: 5;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
`;

export const ModalView = styled.View`
	background-color: ${(props)  => props.theme.colors.surface};
	margin: 20px;
	border-radius: 20px;
	padding: 35px;
	box-shadow: 5px 10px #888888;		
	elevation: 5;
`;

export const BasicRowView = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const RowView = styled(BasicRowView)`
	justify-content: space-between;
	margin: 3px 1px 12px 1px;
`;

export const RowViewAbsolute = styled(RowView)`
	justify-content: space-between;
	width: 100%;
	position: absolute;
	zIndex : 1;
`;

export const MovieDetailView = styled.ScrollView`
	padding: 5px;
	margin-top:10px;
	margin-left: 20px;
	margin-right: 20px;
`;

export const MovieItemVew = styled.View`
	justify-content: space-around;
	background-color: transparent;
	height: 215px;
	width: 130px;
	margin-left: 6px;
	margin-right: 6px;
`;

export const ActorItemView = styled.View`
	background-color: transparent;
	height: 100px;
	width: 80px;
	margin: 1px;
	align-items: center;
	justify-content: space-around;
`;

/**
 * Images Styles
 */

export const PosterImage = styled.Image`
	align-self: center;
	height: 150px;
	width: 110px;
	border-radius: 14px;
`;

export const BackdropImage = styled.Image`
	height: 35%;
	width: 100%;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

export const ActorImage = styled.Image`
	height: 60px;
	width: 60px;
	border-radius: 60px;
`;

/**
 * Text Styles
 */

export const Caption = styled.Text(props => ({
	color: props.theme.colors.text,
	fontSize: props.theme.fontSizes.xm,
	textAlign: props.textAlign || 'center',
}));

export const Text = styled(Caption)`
	font-size: ${props  => props.theme.fontSizes.sm};
	text-align: ${props => props.textAlign || 'left'};
	margin-top: ${props => props.marginTop || '0'}px;
	margin-bottom: ${props => props.marginBottom || '0'}px;
	font-weight: ${props => props.fontWeight || 'normal'};
`;

export const SubHeading = styled(Caption)`
	font-size: ${props  => props.theme.fontSizes.m};
	font-weight: bold;
`;

export const Title = styled(Caption)`
	font-size: ${props  => props.theme.fontSizes.l};
	font-weight: bold;
	margin-top: ${props => props.marginTop || '0'}px;
	margin-bottom: ${props => props.marginBottom || '0'}px;
`;

export const Headline = styled(Caption)`
	font-size: ${props  => props.theme.fontSizes.xl};
	font-weight: bold;
	text-align: ${props => props.textAlign || 'left'};
	margin-left: ${props => props.marginLeft || '0'}px;
	margin-right: ${props => props.marginRight || '0'}px;	
`;

/**
 * Button Styles
 */

export const Button = styled.Pressable`
	background-color: ${props => props.backgroundColor || props.theme.colors.primary};	
	border-radius: 10px;
	padding: 10px;
	elevation: 4;	
	margin: 4px;
	align-items: center;
	justify-content: center;
`;

export const ButtonClose = styled(Button)`
	background-color: ${props => props.backgroundColor || props.theme.colors.secondary};
`;

export const IconButton = styled(Button)`
	background-color: ${props => props.transparent ? 'transparent' : props.theme.colors.primary}
	align-items: center;
	justify-content: center;
	margin-right: ${props => props.marginLeft || '5'}px
	align-self: ${props => props.alignSelf || 'auto'}
	height: 35px;
	width: 35px;
	border-radius: 50px;
	padding: 2px;
`;

/**
 * Input Styles
 */

export const SearchInput = styled.TextInput`
	background-color: ${(props)  => props.theme.colors.surface};
	color: ${(props)  => props.theme.colors.text};
	font-size: 16px;
	height: 35px;
	width: 210px;
	margin-top: 12px;
	margin-bottom: 12px;	
	border-width: 0.8px;
	border-color: #E0E0E0;
	border-radius: 20px;
	padding-bottom: 0px;
	padding-top: 0px;
	padding-left: 15px;
`;


