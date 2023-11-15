import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redax/selectors';
import { addContact } from 'redax/operations';
// import { addContact } from '../../redax/contactsSlice';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
	FormStyled,
	FieldWrapper,
	Label,
	ContactInput,
	Button,
} from './Phonebook.styled';

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
	const contacts = useSelector(getContacts);
	const dispatch = useDispatch();

	const handleSubmit = (newContact, { resetForm }) => {
		const alreadyExist = contacts.find(
			(contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
		);

		if (alreadyExist) {
			resetForm();
			return alert('such name already exist');
		}

		dispatch(addContact(newContact));
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
					<ContactInput
						type="text"
						name="name"
						autoComplete="off"
						placeholder="Tom Jhonson"
					/>
					<ErrorMessage name={'name'}></ErrorMessage>
				</FieldWrapper>

				<FieldWrapper>
					<Label htmlFor="number">Telephone</Label>
					<ContactInput type="tel" name="number" placeholder="+28023456724" />
					<ErrorMessage name={'number'}></ErrorMessage>
				</FieldWrapper>

				<Button type="submit">Add contact</Button>
			</FormStyled>
		</Formik>
	);
};
