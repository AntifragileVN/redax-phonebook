export const Filter = ({ filter, handleChange }) => {
	return (
		<input
			type="text"
			value={filter}
			name="filter"
			onChange={handleChange}
		/>
	);
};
