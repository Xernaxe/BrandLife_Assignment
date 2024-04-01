import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button/Button';
import CardActions from '@mui/material/CardActions';

interface Props {
	id: number;
	genre: string;
	desc: string;
	name: string;
	removeBook: (id: number) => Promise<boolean>
}
export const BookItem: React.FC<Props> = ({
	id,
	genre,
	desc,
	name,
	removeBook
}) => {
	const cardStyles = {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	};
	return (
		<Card sx={cardStyles}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{name}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{genre}
				</Typography>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					{desc}
				</Typography>
			</CardContent>
			<CardActions style={{ marginTop: 'auto' }}>
				<Button variant='contained'>Edit</Button>
				<Button variant='outlined' onClick={() => removeBook(id)}>Delete</Button>
			</CardActions>
		</Card>
	);
};
