import React from 'react';

export const BookItem = ({
	id,
	genre,
	desc,
	name,
}: {
	id: number;
	genre: string;
	desc: string;
	name: string;
}) => {
	return (
		<div>
			<p>{name}</p>
			<p>{genre}</p>
			<p>{desc}</p>
			<p>{id}</p>
		</div>
	);
};
