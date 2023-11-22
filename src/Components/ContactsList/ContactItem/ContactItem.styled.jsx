import styled from 'styled-components';

const ListItem = styled.li`
	position: relative;
	background: #263238;
	display: flex;
	align-content: center;
	justify-content: space-between;

	&:not(:last-child) {
		margin-bottom: 20px;
	}

	&::before {
		content: '';
		height: 100%;
		width: 10px;
		position: absolute;
		left: 0;
		top: 0;
		background: #fed36a;
	}
`;
export const ItemInfo = styled.div`
	padding: 15px 20px;
`;

export const PersonName = styled.p`
	font-size: 20px;
	font-weight: 500;
	line-height: 1.2;
	margin-bottom: 5px;
`;

export const PhoneNumber = styled.p`
	font-size: 14px;
	line-height: 1.2;
`;

export { ListItem };
