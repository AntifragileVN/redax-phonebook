const { useAuth } = require('hooks');
const { Navigate } = require('react-router-dom');

export const PrivateRoute = ({ component: Component }, redirectTo = '/') => {
	const { isLoggedIn, isRefreshing } = useAuth();

	const shouldRedirect = !isLoggedIn && !isRefreshing;

	return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
