import { Nav, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
	return (
		<Nav>
			<StyledLink to="register">Register</StyledLink>
			<StyledLink to="login">Login</StyledLink>
		</Nav>
	);
};
