import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	align-items: center;
`;

export const StyledLink = styled(NavLink)`
	position: relative;
	display: inline-block;
	text-decoration: none;
	padding: 10px 0px;
	font-weight: 700;
	color: inherit;

	&:not(:last-child) {
		margin-right: 15px;
	}

	&.active {
		color: #fed36a;
	}

	&.active::before {
		content: ' ';
		position: absolute;
		height: 3px;
		width: 100%;
		top: 100%;
		left: 0;
		color: #fed36a;
		background-color: #fed36a;
	}
`;
