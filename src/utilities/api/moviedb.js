import axios from 'axios';
import { API_URL, API_KEY, IMG_URL } from '@env';

const API_SEARCH = '/movie';
const PARAM_KEY = 'api_key=';
const PARAM_PAGE = 'page=';
const PARAM_LANGUAGE = 'language=';

const IMG_SIZE = '/w500';

export const createImgUrl = (imgPath) => `${IMG_URL}${IMG_SIZE}${imgPath}`;

const createMovieUrl = (searchTerm, searchLanguage = 'en-US', page = '1') =>
	`${API_URL}${API_SEARCH}${searchTerm}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${searchLanguage}&${PARAM_PAGE}${page}`;


export const getMovies = async (searchTerm = '/top_rated') => {
	const url = createMovieUrl(searchTerm);
	try {		
		return await axios.get(url);
	}
	catch (error) {
		console.log(error);
	}
};