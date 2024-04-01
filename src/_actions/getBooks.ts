import axios from 'axios';
import { Book } from '../_types/Book';

const API_URL = 'http://localhost:3001/books';
export const getBooks = async () => {
	const response = axios.get(API_URL);
	return (await response).data as Book[];
};
