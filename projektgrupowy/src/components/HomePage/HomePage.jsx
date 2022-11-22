import React from 'react';
import { Typography, List } from '@mui/material';

const HomePage = () => {
	return (
		// <div>Dashboard</div>
		<>
			<Typography
				variant="h2"
				align="center"
				sx={{ fontSize: '2rem', my: '.8rem' }}>
				Dashboard: Aktualnie obowiązująca tabela typu kursów średnich walut
				obcych:
			</Typography>

			<List sx={{ width: '100%', alignContent: 'center' }}></List>
		</>
	);
};

export default HomePage;
