import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.nav`
	display: flex;
	align-items: center;
	column-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
	display: inline-block;
	text-decoration: none;
	padding: 12px;
	font-weight: 700;
	color: #2a363b;
`;
