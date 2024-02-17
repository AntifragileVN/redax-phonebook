import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redax/contacts/selectors';
import { addContact } from 'redax/contacts/operations';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
	FormStyled,
	FieldWrapper,
	InputWrapper,
	Label,
	ContactInput,
} from './Phonebook.styled';

import { Button } from 'Components/Button/Button';
import { UserIcon, PhoneIcon } from 'Components/Form/Form.styled';
import { toast } from 'react-toastify';

const initialValues = {
	name: '',
	number: '',
};

const namePattern = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phonePattern =
	/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object().shape({
	name: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required')
		.matches(
			namePattern,
			"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
		),
	number: Yup.string()
		.max(13, 'Must be 13 characters or less')
		.required('Required')
		.matches(
			phonePattern,
			'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
		),
});

export const Phonebook = () => {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	const handleSubmit = (newContact, { resetForm }) => {
		const alreadyExist = contacts.find(
			(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
		);

		if (alreadyExist) {
			resetForm();
			toast.error('Such name already exist', {
				position: 'bottom-right',
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			});
		}

		dispatch(addContact(newContact));
		toast.success(`New contact ${newContact.name} created!`);
		resetForm();
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={handleSubmit}
		>
			<FormStyled>
				<FieldWrapper>
					<Label htmlFor="name">Name</Label>
					<InputWrapper>
						<UserIcon />
						<ContactInput
							type="text"
							name="name"
							autoComplete="off"
							placeholder="Tom Jhonson"
						/>
					</InputWrapper>
					<ErrorMessage name={'name'}></ErrorMessage>
				</FieldWrapper>

				<FieldWrapper>
					<Label htmlFor="number">Telephone</Label>
					<InputWrapper>
						<PhoneIcon />
						<ContactInput
							type="tel"
							name="number"
							placeholder="+28023456724"
						/>
					</InputWrapper>
					<ErrorMessage name={'number'}></ErrorMessage>
				</FieldWrapper>

				<Button type="submit">Add contact</Button>
			</FormStyled>
		</Formik>
	);
};
