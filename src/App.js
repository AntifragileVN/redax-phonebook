import './App.css';
import { Layout } from './Components/Layout/Layout';

import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redax/auth/operation';
import { lazy, useEffect } from 'react';

const HomePage = lazy(() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));

export default function App() {
	const dispatch = useDispatch();
	const { isRefreshing } = useAuth();

	useEffect(() => {
		dispatch(refreshUser());
	}, [dispatch]);

	return isRefreshing ? null : (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path="register" element={<RegisterPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="contacts" element={<ContactsPage />} />
			</Route>
		</Routes>
	);
}
