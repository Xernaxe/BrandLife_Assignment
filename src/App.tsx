import './App.css';
import { BooksList } from './_components/BooksList';
import { useBooks } from './_actions/useBooks';

function App() {
	const { data, error, removeBook } = useBooks();
	
	if (error) return <div>Error loading books</div>;
	if (!data) return <div>Loading...</div>;
	return (
		<>
			<BooksList books={data} removeBook={removeBook} />
		</>
	);
}

export default App;
