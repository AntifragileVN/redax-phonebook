export const Filter = ({ filter, handleChange }) => {
	return (
		<input
			type="text"
			value={filter}
			name="filter"
			onChange={(e) => handleChange(e.target.value.toLocaleLowerCase())}
		/>
	);
};
