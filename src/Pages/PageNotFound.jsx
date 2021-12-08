import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const Title = styled.h1`
	margin-top: 250px;
	font-size: 5rem;
	font-weight: bold;
`;

const PageNotFound = () => {
	return (
		<Container>
			<Title>Page Not Found</Title>
		</Container>
	);
};

export default PageNotFound;
