import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Paper, Grid } from '@mui/material';
import ProductItem from './ProductItem';
import data from '../Data/data.json'

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	'&:hover': {
		transition: `all 0.2s ease-in-out`,
		transform: 'scale(1.02)'
	}
}));

const Products = ({ alignment }) => {
	const [ value, setValue ] = React.useState(2);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '20px' }}>
				{data[alignment].map((item, index) => {
					return <ProductItem item={item} key={index} />;
				})}
			</Grid>
		</Box>
	);
};

export default Products;
