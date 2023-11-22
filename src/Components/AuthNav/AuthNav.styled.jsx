import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

export const StyledLink = styled(NavLink)`
	display: inline-block;
	text-decoration: none;
	padding: 12px;
	font-weight: 700;
	color: #2a363b;
`;

// .link.active {
//   color: #e84a5f;
// }
