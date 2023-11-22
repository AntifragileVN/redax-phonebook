import { AuthNav } from 'Components/AuthNav/AuthNav';
import { Header, HeaderWrapper } from './AppBar.styled';
import { Container } from 'Components/Layout/Layout.styled';
import { useAuth } from 'hooks';
import { UserMenu } from 'Components/UserMenu/UserMenu';
import { Navigation } from 'Components/Navigation/Navigation';

export const AppBar = () => {
	const { isLoggedIn } = useAuth();

	return (
		<Header>
			<Container>
				<HeaderWrapper>
					<Navigation />
					{isLoggedIn ? <UserMenu /> : <AuthNav />}
				</HeaderWrapper>
			</Container>
		</Header>
	);
};
