import React from 'react';
import { Book } from '../_types/Book';
import { BookItem } from './BookItem';
import { Grid } from '@mui/material';

export const BooksList = ({ books }: { books: Book[] }) => {
	const gridGaps = { xs: 0, sm: 1, md: 2 };
	return (
		<Grid
			container
			spacing={2}
			justifyContent='center'
			rowGap={gridGaps}
			columnGap={gridGaps}
		>
			{books.map((book) => {
				return (
					<Grid
						item
						xs={12}
						sm={5.5}
						md={3.5}
						sx={{ minHeight: '200px' }}
						key={book.id}
					>
						<BookItem {...book} />
					</Grid>
				);
			})}
		</Grid>
	);
};
