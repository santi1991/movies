import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { selectCurrentTheme } from '../../utilities/app/slices/themeSlice';
import * as S from '../../utilities/commons/Styles';


const HeaderSection = ({ onSearch, masterPopularList, masterTopRatedList }) => {

	const theme = useSelector(selectCurrentTheme);
	const [search, setSearch] = useState('');

	const filterList = (masterArray, targetText) => {
		return masterArray.filter((item) => {
			const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
			const textData = targetText.toUpperCase();
			return itemData.indexOf(textData) > -1;
		});
	};

	const searchMovieByTitle = (text) => {
		setSearch(text);
		if (text) {
			const newPopularData = filterList(masterPopularList, text);
			const newTopRatedData = filterList(masterTopRatedList, text);
			return onSearch(newPopularData, newTopRatedData);
		}
		else {
			return onSearch(masterPopularList, masterTopRatedList);
		}
	};

	const clearSearch = () =>{
		setSearch('');
		return onSearch(masterPopularList, masterTopRatedList);
	};

	return (
		<>
			<S.Headline marginLeft={60} marginRight={60}>Hello, what do you want to watch?</S.Headline>

			<S.BasicRowView>
				<S.SearchInput
					onChangeText={searchMovieByTitle}
					value={search}
					placeholder='Search'
					placeholderTextColor={theme.colors.placeholder}
					inlineImageLeft='search_icon'
					inlineImagePadding={20}
				/>
				{
					search.length > 0 && (
						<S.IconButton onPress={clearSearch}>
							<Icon name='clear' size={21} color={theme.colors.background} />
						</S.IconButton>
					)
				}
			</S.BasicRowView>
		</>
	);
};

HeaderSection.propTypes = {
	onSearch: PropTypes.func,
	masterPopularList: PropTypes.array,
	masterTopRatedList: PropTypes.array
};

export default HeaderSection;
