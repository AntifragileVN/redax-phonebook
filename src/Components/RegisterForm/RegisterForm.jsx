import { useDispatch } from 'react-redux';
import { register } from 'redax/auth/operation';
import {
	Form,
	Label,
	InputWrapper,
	StyledInput,
	UserIcon,
	EmailIcon,
	PasswordIcon,
} from './RegisterForm.styled';
import { Button } from 'Components/Button/Button';
import { CustomInput } from 'Components/CustomInput/CustomInput';

export const RegisterForm = () => {
	const dispath = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		dispath(
			register({
				name: form.elements.name.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
			})
		);
		form.reset();
	};

	return (
		<Form onSubmit={handleSubmit} autoComplete="off">
			{/* <CustomInput
				type={'text'}
				placeholder={'Ivan Dorn'}
				id={'regName'}
				name={'name'}
			/> */}

			<Label htmlFor="regName">Username</Label>
			<InputWrapper>
				<UserIcon />
				<StyledInput type="text" name="name" id="regName" />
			</InputWrapper>

			<Label htmlFor="regEmail">Email</Label>
			<InputWrapper>
				<EmailIcon />
				<StyledInput type="email" name="email" id="regEmail" />
			</InputWrapper>

			<Label htmlFor="regPassword">Password</Label>
			<InputWrapper>
				<PasswordIcon />
				<StyledInput type="password" name="password" id="regPassword" />
			</InputWrapper>

			<Button type="submit">Register</Button>
		</Form>
	);
};
