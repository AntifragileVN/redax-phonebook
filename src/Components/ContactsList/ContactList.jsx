import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from '../../redax/contacts/selectors';
import { fetchContacts } from 'redax/contacts/operations';
import { useEffect } from 'react';

export function ContactList({ filter }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const isLoading = useSelector(selectIsLoading);
	const contacts = useSelector(selectContacts);

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
					></ContactItem>
				))}
			</List>
		</>
	);
}
