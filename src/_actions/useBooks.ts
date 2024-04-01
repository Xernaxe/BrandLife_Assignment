import axios from 'axios';
import useSWR from 'swr';
import { Book } from '../_types/Book';

export const useBooks = () => {
	const api = axios.create({
		baseURL: import.meta.env.VITE_API_BASE_URL,
	});

	const fetcher = (url: string) => api.get(url).then((res) => res.data);

	const { data, error, mutate } = useSWR<Book[], Error>('/books', fetcher);

	const removeBook = async (id: number) => {
		if (!data) {
			return false;
		}
		try {
			await api.delete(`/books/${id}`);
			mutate(
				data.filter((book) => book.id !== id),
				true
			);
			return true;
		} catch (error) {
			console.error('Error removing book:', error);
			return false
		}
	};
	return { data, error, removeBook };
};
