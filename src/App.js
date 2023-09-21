import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Phonebook } from './Components/Phonebook/Phonebook';
import { ContactList } from './Components/ContactsList/ContactList';
import { Filter } from './Components/Filter/Filter';
import './App.css';

class App extends Component {
	state = {
		contacts: [],
		name: '',
		number: '',
		gender: 'male',
		filter: '',
	};

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	hangleRadio = (e) => {
		this.setState({ gender: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { contacts } = this.state;
		const alreadyExist = contacts.find(
			(contact) =>
				contact.name.toLowerCase() === this.state.name.toLowerCase()
		);

		if (alreadyExist) {
			return alert('such name already exist');
		}

		this.setState({
			contacts: [
				...this.state.contacts,
				{
					id: nanoid(),
					name: this.state.name,
					number: this.state.number,
					gender: this.state.gender,
				},
			],
		});
	};

	onDeleteContact = (id) => {
		this.setState({
			contacts: this.state.contacts.filter(
				(contact) => contact.id !== id
			),
		});
	};

	render() {
		const { contacts, name, number, gender, filter } = this.state;
		const normalizedFilter = filter.toLowerCase();

		const filterContacts = contacts.filter((contact) =>
			contact.name.toLowerCase().includes(normalizedFilter)
		);

		return (
			<div className="App">
				<h1>Phonebook</h1>
				<Phonebook
					name={name}
					number={number}
					gender={gender}
					onContactFormSubmit={this.handleSubmit}
					onContactFormChange={this.handleChange}
					onContactFromChecked={this.hangleRadio}
				/>
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
