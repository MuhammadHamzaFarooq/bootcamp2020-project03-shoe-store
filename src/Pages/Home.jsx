import styled, { keyframes } from 'styled-components';
import Navbar from '../Components/Navbar';
import Products from '../Components/Products';
import Footer from './Footer';


const Container = styled.div`
	width: 100%;
	height: 100vh;
	overflow-x: hidden;
	background-image: repeating-linear-gradient(
			45deg,
			hsla(64, 83%, 54%, 0.05) 0px,
			hsla(64, 83%, 54%, 0.05) 1px,
			transparent 1px,
			transparent 11px,
			hsla(64, 83%, 54%, 0.05) 11px,
			hsla(64, 83%, 54%, 0.05) 12px,
			transparent 12px,
			transparent 32px
		),
		repeating-linear-gradient(
			90deg,
			hsla(64, 83%, 54%, 0.05) 0px,
			hsla(64, 83%, 54%, 0.05) 1px,
			transparent 1px,
			transparent 11px,
			hsla(64, 83%, 54%, 0.05) 11px,
			hsla(64, 83%, 54%, 0.05) 12px,
			transparent 12px,
			transparent 32px
		),
		repeating-linear-gradient(
			0deg,
			hsla(64, 83%, 54%, 0.05) 0px,
			hsla(64, 83%, 54%, 0.05) 1px,
			transparent 1px,
			transparent 11px,
			hsla(64, 83%, 54%, 0.05) 11px,
			hsla(64, 83%, 54%, 0.05) 12px,
			transparent 12px,
			transparent 32px
		),
		repeating-linear-gradient(
			135deg,
			hsla(64, 83%, 54%, 0.05) 0px,
			hsla(64, 83%, 54%, 0.05) 1px,
			transparent 1px,
			transparent 11px,
			hsla(64, 83%, 54%, 0.05) 11px,
			hsla(64, 83%, 54%, 0.05) 12px,
			transparent 12px,
			transparent 32px
		),
		linear-gradient(90deg, rgb(41, 27, 158), rgb(249, 77, 212));
	position: relative;
`;

const Shape = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	transform: rotate(180deg);
`;

const Wrapper = styled.div`
	display: flex;
	position: absolute;
	z-index: 2;
	top: 20%;
	left: 0;
	width: 100%;
	height: 50%;
	padding: 2px;
`;
const InfoContainer = styled.div`
	flex: 1.5;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0px 5px;
	text-align: center;
	transform: translateX(-100%);
	animation: info-container-animation 1s ease-in-out forwards;
	@keyframes info-container-animation {
		100%{
			transform: translate(0);
		}
	}
`;

const Title = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	margin-bottom: 0.5rem 0;
`;
const Desc = styled.p`
	font-size: 1rem;
	margin: 1rem 0;
	font-weight: bold;
`;
const Button = styled.button`
	padding: 0.7rem 1.5rem;
	background-color: black;
	color: white;
	outline: none;
	cursor: pointer;
	border: none;
	margin-top: 0.5rem 0;
`;

const ImageContainer = styled.div`
	flex: 1;
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateX(100%);
	animation: image-container-animation 1s ease-in-out forwards;
	@keyframes image-container-animation {
		100%{
			transform: translate(0);
		}
	}
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;

const Home = () => {
	return (
		<>
			<Container>
				<Shape>
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						style={{
							position: 'relative',
							display: 'block',
							width: ` calc(100% + 1.3px)`,
							height: ' 150px'
						}}
					>
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							style={{
								fill: 'white'
							}}
						/>
					</svg>
				</Shape>
				<Wrapper>
					<InfoContainer>
						<Title>QUALITY SHOE</Title>
						<Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Desc>
						<Button>SHOP NOW</Button>
					</InfoContainer>
					<ImageContainer>
						<Image src="http://clipart-library.com/images_k/shoe-transparent-background/shoe-transparent-background-12.png" alt='Shoe Image' />
					</ImageContainer>
				</Wrapper>
			</Container>
		   <Products/>
		   <Footer/>
		</>

	);
};

export default Home;
