import PropTypes from 'prop-types';

import { ContactItem } from './ContactItem/ContactItem';
import { List } from './ContactList.styled';

export function ContactList({ contacts, onDeleteContact }) {
	return (
		<List>
			{contacts.map(({ id, name, number, gender }) => (
				<ContactItem
					key={id}
					id={id}
					name={name}
					number={number}
					gender={gender}
					onDeleteContact={onDeleteContact}
				></ContactItem>
			))}
		</List>
	);
}

ContactItem.propTypes = {
	// contacts: PropTypes.arrayOf,
};
