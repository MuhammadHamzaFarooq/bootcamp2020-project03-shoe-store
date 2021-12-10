import React, { useState } from 'react';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	
	return (
		<Nav>
			<Logo href="">
				Shoe<span>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_zTHwdU4YzE9kCHKLeGzoSHy4ji6k1J4Kw&usqp=CAU"
						alt="shoe"
						style={{
							width: '30px',
							height: '30px',
							backgroundColor: 'transparent',
							borderRadius: '50%',
							textAlign: 'center'
						}}
					/>
				</span>Store
			</Logo>
			<Hamburger onClick={() => setIsOpen(!isOpen)}>
				<span />
				<span />
				<span />
			</Hamburger>
			<Menu isOpen={isOpen}>
				<Link to="/" className="home" style={{ textDecoration: 'none' }}>
					<MenuLink>Home</MenuLink>
				</Link>
				<Link to="/products" className="products" style={{ textDecoration: 'none' }}>
				<MenuLink>Products</MenuLink>
				</Link>
				
				<MenuLink>
					<Badge badgeContent={4} color="primary">
						<ShoppingCartIcon />
					</Badge>
				</MenuLink>
			</Menu>
		</Nav>
	);
};

export default Navbar;

const MenuLink = styled.span`
	padding: 1rem 2rem;
	cursor: pointer;
	text-align: center;
	font-weight: 700;
	text-decoration: none;
	color: #67bc98;
	transition: all 0.3s ease-in;
	font-size: 0.9rem;
	&:hover {
		color: #7b7fda;
	}
`;

const Nav = styled.div`
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	background: white;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 10;
`;

const Logo = styled.a`
	padding: 1rem 0;
	color: #7b7fda;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;
	span {
		font-weight: 300;
		font-size: 1.3rem;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;

	@media (max-width: 768px) {
		overflow: hidden;
		flex-direction: column;
		max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
		transition: max-height 0.3s ease-in;
		width: 100%;
	}
`;

const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	span {
		height: 2px;
		width: 25px;
		background: #7b7fda;
		margin-bottom: 4px;
		border-radius: 5px;
	}
	@media (max-width: 768px) {
		display: flex;
	}
`;
