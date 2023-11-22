import { AppBar } from 'Components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

export const Layout = () => {
	return (
		<>
			<AppBar />
			<main>
				<Container>
					<Suspense fallback={null}>
						<Outlet />
					</Suspense>
				</Container>
			</main>
		</>
	);
};
