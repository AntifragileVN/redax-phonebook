import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';

export function ContactItem({ name, number, gender, id, onDeleteContact }) {
	return (
		<ListItem>
			{name}: {number} {gender}
			<button onClick={() => onDeleteContact(id)}>Delete</button>
		</ListItem>
	);
}

ContactItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	gender: PropTypes.string,
};
