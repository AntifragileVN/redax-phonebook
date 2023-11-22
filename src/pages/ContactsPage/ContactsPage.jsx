import { ContactList } from 'Components/ContactsList/ContactList';
import { Filter } from 'Components/Filter/Filter';
import { Section, SectionTitle } from 'Components/Layout/Layout.styled';
import { Phonebook } from 'Components/Phonebook/Phonebook';

export const ContactsPage = () => {
	return (
		<>
			<Section>
				<SectionTitle>Phonebook</SectionTitle>
				<Phonebook />
			</Section>
			<Section>
				<SectionTitle>Contacts</SectionTitle>
				{/* <Filter /> */}
				<ContactList />
			</Section>
		</>
	);
};
