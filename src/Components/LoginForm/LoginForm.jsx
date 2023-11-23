import { useDispatch } from 'react-redux';
import { logIn } from 'redax/auth/operation';

import {
	Form,
	Label,
	InputWrapper,
	StyledInput,
	EmailIcon,
	PasswordIcon,
} from 'Components/Form/Form.styled';
import { Button } from 'Components/Button/Button';

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
		<Form onSubmit={handleSubmit} autoComplete="off">
			<Label htmlFor="logEmail">Email</Label>
			<InputWrapper>
				<EmailIcon />
				<StyledInput
					type="email"
					name="email"
					id="logEmail"
					placeholder="example@domain.com"
				/>
			</InputWrapper>

			<Label htmlFor="logPassword">Password</Label>
			<InputWrapper>
				<PasswordIcon />
				<StyledInput
					type="password"
					name="password"
					id="logPassword"
					placeholder="●●●●●●●●●●●●"
				/>
			</InputWrapper>

			<Button type="submit">Log in</Button>
		</Form>
	);
};
