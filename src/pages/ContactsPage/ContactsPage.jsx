import { ContactList } from 'Components/ContactsList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import { Section, SectionTitle } from 'Components/Layout/Layout.styled';
import { Phonebook } from 'Components/Phonebook/Phonebook';
import { useState } from 'react';

export const ContactsPage = () => {
	const [filter, setFilter] = useState('');

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
				<ContactList filter={filter} />
			</Section>
		</>
	);
};
