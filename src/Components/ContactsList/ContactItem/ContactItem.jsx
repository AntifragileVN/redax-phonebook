import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contacts/operations';

export function ContactItem({ name, number, id }) {
	const dispatch = useDispatch();

	// console.log('item ID', id);
	return (
		<ListItem>
			<p>{name}</p>
			<p>{number}</p>

			<button onClick={() => dispatch(deleteContact(id))}>Delete</button>
		</ListItem>
	);
}

ContactItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	id: PropTypes.string.isRequired,
};
