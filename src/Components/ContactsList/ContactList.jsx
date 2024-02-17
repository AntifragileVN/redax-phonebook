import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { Transition } from 'react-transition-group';

export function ContactList({ filter, contacts }) {
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter)
	);

	return (
		<>
			<List component="ul">
				{filteredContacts.map(({ id, name, number }) => (
					<Transition timeout={500} mountOnEnter unmountOnExit>
						{(state) => (
							<ContactItem
								key={id}
								id={id}
								name={name}
								number={number}
								state={state}
							/>
						)}
					</Transition>
				))}
			</List>
		</>
	);
}
