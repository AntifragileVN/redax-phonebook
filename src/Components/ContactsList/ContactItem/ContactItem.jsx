import PropTypes from 'prop-types';
import { ListItem, ItemInfo, PersonName, PhoneNumber } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contacts/operations';
import { Button } from 'Components/Button/Button';

export function ContactItem({ name, number, id }) {
	const dispatch = useDispatch();

	return (
		<ListItem>
			<ItemInfo>
				<PersonName>{name}</PersonName>
				<PhoneNumber>{number}</PhoneNumber>
			</ItemInfo>

			<Button className="contactDelete" onClick={() => dispatch(deleteContact(id))}>
				Delete
			</Button>
		</ListItem>
	);
}

ContactItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	id: PropTypes.string.isRequired,
};
