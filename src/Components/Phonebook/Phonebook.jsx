import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redax/contacts/selectors';
import { addContact } from 'redax/contacts/operations';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormStyled, FieldWrapper, Label, ContactInput } from './Phonebook.styled';

import { Button } from 'Components/Button/Button';
import { UserIcon, PhoneIcon } from 'Components/Form/Form.styled';

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
				<div>
					<Label htmlFor="name">Name</Label>
					<FieldWrapper>
						<UserIcon />
						<ContactInput
							type="text"
							name="name"
							autoComplete="off"
							placeholder="Tom Jhonson"
						/>
					</FieldWrapper>
					<ErrorMessage name={'name'}></ErrorMessage>
				</div>

				<div>
					<Label htmlFor="number">Telephone</Label>
					<FieldWrapper>
						<PhoneIcon />
						<ContactInput
							type="tel"
							name="number"
							placeholder="+28023456724"
						/>
					</FieldWrapper>
					<ErrorMessage name={'number'}></ErrorMessage>
				</div>

				<Button type="submit">Add contact</Button>
			</FormStyled>
		</Formik>
	);
};
