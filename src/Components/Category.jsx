import styled from 'styled-components';
import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Products from './Products';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 20px 0px;
	padding: 20px 0px;
`;

const Title = styled.h1`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 30px;
	border-bottom: 2px solid gray;
`;

const Category = () => {
    const [alignment, setAlignment] = useState('adidas');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    return (

        <>
            <Container>
                <Title>CATEGORIES</Title>
                <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} style={{ cursor: 'pointer' } }>
                    <ToggleButton value="adidas">ADIDAS</ToggleButton>
                    <ToggleButton value="nike">NIKE</ToggleButton>
                    <ToggleButton value="reebok">REEBOK</ToggleButton>
                    <ToggleButton value="underarmour">UNDERARMOUR</ToggleButton>
                </ToggleButtonGroup>
            </Container>
            <Products alignment={alignment} />
        </>
    );
};

export default Category;