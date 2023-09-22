// import { ContactInput } from './Phonebook.styled';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	name: '',
	number: '',
};

const namePattern =
	/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
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

export const Phonebook = ({ onFormSubmit }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onFormSubmit}
		>
			<Form>
				<label htmlFor="name"></label>
				<Field type="text" name="name" />
				<ErrorMessage name={'name'}></ErrorMessage>

				<label htmlFor="number"></label>
				<Field type="tel" name="number" />
				<ErrorMessage name={'number'}></ErrorMessage>

				<button type="submit">Add contact</button>
			</Form>
		</Formik>
	);
};
