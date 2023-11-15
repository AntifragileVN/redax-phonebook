import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redax/selectors';
import { deleteContact } from '../../redax/contactsSlice';

export function ContactList() {
	const dispatch = useDispatch();

	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const handleDelete = (id) => dispatch(deleteContact(id));

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter)
	);

	return (
		<List>
			{filteredContacts.map(({ id, name, number }) => (
				<ContactItem
					key={id}
					id={id}
					name={name}
					number={number}
					onDeleteContact={handleDelete}
				></ContactItem>
			))}
		</List>
	);
}
