import { ContactInput, Form } from './Phonebook.styled';

export function Phonebook({
	name,
	number,
	gender,
	onContactFormSubmit,
	onContactFormChange,
	onContactFromChecked,
}) {
	return (
		<Form onSubmit={onContactFormSubmit}>
			<ContactInput
				type="text"
				name="name"
				onChange={onContactFormChange}
				placeholder="Jacob Mercer"
				value={name}
				// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
				required
			/>

			<ContactInput
				type="tel"
				name="number"
				value={number}
				onChange={onContactFormChange}
				// pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
			/>
			<div>
				<input
					type="radio"
					name="maleGender"
					value={'male'}
					checked={gender === 'male'}
					onChange={onContactFromChecked}
					title="male"
				/>
				<label htmlFor="maleGender">Male</label>
			</div>

			<div>
				<input
					type="radio"
					name="femaleGender"
					value={'female'}
					checked={gender === 'female'}
					onChange={onContactFromChecked}
					title="female"
				/>
				<label htmlFor="femaleGender">Female</label>
			</div>

			<button type="submit">Add contact</button>
		</Form>
	);
}
