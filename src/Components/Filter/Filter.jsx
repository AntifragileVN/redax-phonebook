import { InputWrapper, SearchIcon, StyledInput } from 'Components/Form/Form.styled';

export const Filter = ({ filter, handleChange }) => {
	return (
		<InputWrapper>
			<SearchIcon />
			<StyledInput
				type="text"
				value={filter}
				name="filter"
				onChange={(e) => handleChange(e.target.value.toLocaleLowerCase())}
			/>
		</InputWrapper>
	);
};
