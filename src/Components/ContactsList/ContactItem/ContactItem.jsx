import PropTypes from 'prop-types';

import { ListItem, ItemInfo, PersonName, PhoneNumber } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redax/contacts/operations';

import { Button } from 'Components/Button/Button';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { TailSpin } from 'react-loader-spinner';
import { useState } from 'react';
export function ContactItem({ name, number, id }) {
	const dispatch = useDispatch();
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = (id) => {
		setIsDeleting(true);
		dispatch(deleteContact(id));
	};

	return (
		<ListItem>
			<ItemInfo>
				<PersonName>{name}</PersonName>
				<PhoneNumber>{number}</PhoneNumber>
			</ItemInfo>

			<Button
				className="contactDelete"
				onClick={() => handleDelete(id)}
				disabled={isDeleting}
			>
				{isDeleting ? (
					<TailSpin color="#000" width={25} height={25} />
				) : (
					<RiDeleteBin5Line size={25} />
				)}
			</Button>
		</ListItem>
	);
}

ContactItem.propTypes = {
	name: PropTypes.string,
	number: PropTypes.string,
	id: PropTypes.string.isRequired,
};
