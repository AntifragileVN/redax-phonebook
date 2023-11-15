import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';

export function ContactItem({ name, number, id, onDeleteContact }) {
	return (
		<ListItem>
			<p>{name}</p>
			<p>{number}</p>

			<button onClick={() => onDeleteContact(id)}>Delete</button>
		</ListItem>
	);
}

ContactItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	id: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};
