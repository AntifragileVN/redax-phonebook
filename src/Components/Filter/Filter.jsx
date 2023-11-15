import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redax/selectors';
import { setFilter } from 'redax/filterSlice';

export const Filter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(getFilter);

	return (
		<input
			type="text"
			value={filter}
			name="filter"
			onChange={(e) => dispatch(setFilter(e.target.value.toLocaleLowerCase()))}
		/>
	);
};
