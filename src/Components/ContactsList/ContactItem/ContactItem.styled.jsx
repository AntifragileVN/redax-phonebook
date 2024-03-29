import styled from 'styled-components';

const BaseListItem = styled.li`
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

const ListItem = styled(BaseListItem)`
	transition: opacity 500ms;
	opacity: ${({ state }) => (state === 'entered' || state === 'entering' ? 1 : 0)};
`;

export const ItemInfo = styled.div`
	padding: 15px 20px;
`;

export const PersonName = styled.p`
	font-size: 20px;
	font-weight: 600;
	line-height: 1.2;
	margin-bottom: 5px;
`;

export const PhoneNumber = styled.p`
	font-size: 14px;
	line-height: 1.2;
	color: #c0bebe;
`;

export { ListItem };
