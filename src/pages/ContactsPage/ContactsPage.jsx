import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redax/contacts/operations';
import { selectContacts } from 'redax/contacts/selectors';

import { ContactList } from 'Components/ContactsList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import { Section, SectionTitle } from 'Components/Layout/Layout.styled';
import { Phonebook } from 'Components/Phonebook/Phonebook';
const ContactsPage = () => {
	const dispatch = useDispatch();

	const [filter, setFilter] = useState('');
	const contacts = useSelector(selectContacts);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const handleChange = (value) => {
		setFilter(value);
	};

	return (
		<>
			<Section>
				<SectionTitle>Phonebook</SectionTitle>
				<Phonebook />
			</Section>
			<Section>
				<SectionTitle>Contacts</SectionTitle>
				<Filter filter={filter} handleChange={handleChange} />
				<ContactList filter={filter} contacts={contacts} />
			</Section>
		</>
	);
};

export default ContactsPage;
