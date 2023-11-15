import { Phonebook } from './Components/Phonebook/Phonebook';
import { ContactList } from './Components/ContactsList/ContactList';
import { Filter } from './Components/Filter/Filter';

import './App.css';
import { Layout, Section, SectionTitle } from './Components/Layout/Layout.styled';

export default function App() {
	return (
		<Layout>
			<Section>
				<SectionTitle>Phonebook</SectionTitle>
				<Phonebook />
			</Section>

			<Section>
				<SectionTitle>Contacts</SectionTitle>
				<Filter />
				<ContactList />
			</Section>
		</Layout>
	);
}
