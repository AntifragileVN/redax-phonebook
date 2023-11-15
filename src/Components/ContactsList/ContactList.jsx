import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from '../../redax/selectors';
import { deleteContact, fetchContacts } from 'redax/operations';
import { useEffect } from 'react';

export function ContactList() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const isLoading = useSelector(getIsLoading);
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilter);

	const handleDelete = (id) => dispatch(deleteContact(id));

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(filter)
	);

	return (
		<>
			{isLoading && <h1>Whate a bit</h1>}
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
		</>
	);
}
