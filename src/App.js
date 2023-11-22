import './App.css';
import { Layout } from './Components/Layout/Layout';

import { Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage, ContactsPage } from 'pages';
import { Home } from 'pages/Home/Home';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redax/auth/operation';
import { useEffect } from 'react';

export default function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? null : (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="contacts" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
}
