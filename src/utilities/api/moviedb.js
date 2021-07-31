import axios from 'axios';
import { API_URL, API_KEY, IMG_URL } from '@env';

const API_SEARCH = '/movie';
const PARAM_KEY = 'api_key=';
const PARAM_PAGE = 'page=';
const PARAM_LANGUAGE = 'language=';

const LANGUAGE_TAG = 'en-US';

const API_SEARCH_CREDITS = '/credits';

const IMG_SIZE = '/w500';

export const createImgUrl = (imgPath) => `${IMG_URL}${IMG_SIZE}${imgPath}`;

const createMovieUrl = (searchTerm, page = '1') =>
	`${API_URL}${API_SEARCH}${searchTerm}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${LANGUAGE_TAG}&${PARAM_PAGE}${page}`;

const createCreditsUrl = (movieId) => `${API_URL}${API_SEARCH}/${movieId}${API_SEARCH_CREDITS}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${LANGUAGE_TAG}`;


export const getMovies = async (searchTerm = '/top_rated') => {
	const url = createMovieUrl(searchTerm);
	try {		
		return await axios.get(url);
	}
	catch (error) {
		console.log(error);
	}
};

export const getCredits = async (movieId) => {
	const url = createCreditsUrl(movieId);
	try {		
		const result = await axios.get(url);
		return result.data;
	}
	catch (error) {
		console.log(error);
	}
};