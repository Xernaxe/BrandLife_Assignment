import { useEffect, useState } from 'react';
import './App.css';
import { getBooks } from './_actions/getBooks';
import { Book } from './_types/Book';
import { BooksList } from './_components/BooksList';

function App() {
	const [books, setBooks] = useState<Book[] | null>(null);
	const updateBooksState = async () => {
		const fetchedBooks = await getBooks();
		setBooks(fetchedBooks);
	};

	useEffect(() => {
		updateBooksState();
	}, []);
	return <>{books ? <BooksList books={books} /> : <div>loading</div>}</>;
}

export default App;
