import React from 'react';
import { Book } from '../_types/Book';
import { BookItem } from './BookItem';

export const BooksList = ({ books }: { books: Book[] }) => {
	return (
		<>
			{books.map((book) => {
				return <BookItem key={book.id} {...book} />;
			})}
		</>
	);
};
