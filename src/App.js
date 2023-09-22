import { nanoid } from 'nanoid';
import { Component } from 'react';

import { Phonebook } from './Components/Phonebook/Phonebook';
import { ContactList } from './Components/ContactsList/ContactList';
import { Filter } from './Components/Filter/Filter';
import './App.css';

class App extends Component {
	state = {
		contacts: [],
		filter: '',
	};

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	handleSubmit = (newContact, { resetForm }) => {
		console.log('gg');
		const { contacts } = this.state;
		const alreadyExist = contacts.find(
			(contact) =>
				contact.name.toLowerCase() === newContact.name.toLowerCase()
		);

		if (alreadyExist) {
			resetForm();
			return alert('such name already exist');
		}

		const contact = { id: nanoid(), ...newContact };

		this.setState((prevState) => ({
			contacts: [...prevState.contacts, contact],
		}));
		resetForm();
	};

	onDeleteContact = (id) => {
		this.setState({
			contacts: this.state.contacts.filter(
				(contact) => contact.id !== id
			),
		});
	};

	render() {
		const { contacts, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();

		const filterContacts = contacts.filter((contact) =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);

		return (
			<div className="App">
				<h1>Phonebook</h1>
				<Phonebook onFormSubmit={this.handleSubmit} />
				<h2>Contacts</h2>
				<Filter filter={filter} handleChange={this.handleChange} />

				<ContactList
					contacts={filterContacts}
					onDeleteContact={this.onDeleteContact}
				></ContactList>
			</div>
		);
	}
}

export default App;
