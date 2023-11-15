import styled from 'styled-components';

const ListItem = styled.li`
	padding: 10px 0;
	font-size: 18px;
	font-family: sans-serif;
	display: flex;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 10px;
		border-bottom: 1px solid black;
	}
`;

export { ListItem };
