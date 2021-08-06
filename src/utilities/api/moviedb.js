import axios from 'axios';
import { API_URL, API_KEY, IMG_URL } from '@env';

const axiosClient = axios.create();
axiosClient.defaults.baseURL = API_URL;
// axiosClient.defaults.timeout = 9000; // Request will be timeout after 9 seconds.

/**
 * constants to construct URLs depending of the GET request needed
*/
const API_SEARCH = '/movie';
const PARAM_KEY = 'api_key=';
const PARAM_PAGE = 'page=';
const PARAM_LANGUAGE = 'language=';
const LANGUAGE_TAG = 'en-US';
const API_SEARCH_CREDITS = '/credits';
const IMG_SIZE = '/w500';

/**
 * functions that dynamically returns the required URL to GET info form the API
 */
export const createImgUrl = (imgPath) => 
	`${IMG_URL}${IMG_SIZE}${imgPath}`;

const createMovieUrl = (searchTerm, page) =>
	`${API_SEARCH}/${searchTerm}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${LANGUAGE_TAG}&${PARAM_PAGE}${page}`;

const createCreditsUrl = (movieId) => 
	`${API_SEARCH}/${movieId}${API_SEARCH_CREDITS}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${LANGUAGE_TAG}`;

const createDetailsUrl = (movieId) =>
	`${API_SEARCH}/${movieId}?${PARAM_KEY}${API_KEY}&${PARAM_LANGUAGE}${LANGUAGE_TAG}`;

/**
 *  fetch list of movies by category
 */
export const getMovies = async (searchTerm, page = 1) => {
	const url = createMovieUrl(searchTerm, page);
	try {		
		const response = await axiosClient.get(url);
		return response.data;
	}
	catch (error) {
		console.log(error);
	}
};

/**
 * fetch credits of a specific movie by its id
 */
export const getCredits = async (movieId) => {
	const url = createCreditsUrl(movieId);
	try {		
		const response = await axiosClient.get(url);
		return response.data;
	}
	catch (error) {
		console.log(error);
	}
};

/**
 * fetch the details of a specific movie by its id
 */
export const getDetails = async (movieId) => {
	const url = createDetailsUrl(movieId);
	try {	
		const response = await axiosClient.get(url);
		return response.data;	
	}
	catch (error) {
		console.log(error);
	}
};

/**
 *  fetch all the required data for a specific movie by its id
 */
export const fetchMovieData = async (movieId) => {
	const asyncFunctions = [
		getCredits(movieId),
		getDetails(movieId)
	];
	return await Promise.all(asyncFunctions);		
};

/**
 * fetch all list of movies needed to populate initial state
 */
export const fetchAllMovies = async () => {
	const asyncFunctions = [
		getMovies('popular'),
		getMovies('top_rated')
	];
	return await Promise.all(asyncFunctions);
};

