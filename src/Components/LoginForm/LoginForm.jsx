import { useDispatch } from 'react-redux';
import { logIn } from 'redax/auth/operation';

export const LoginForm = () => {
	const dispath = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		dispath(
			logIn({
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);

		form.reset();
	};

	return (
		<form onSubmit={handleSubmit} autoComplete="off">
			<label>
				Email
				<input type="email" name="email" />
			</label>
			<label>
				Password
				<input type="password" name="password" />
			</label>
			<button type="submit">LogIn</button>
		</form>
	);
};
