import styled from 'styled-components';
import { RiDeleteBin5Line } from 'react-icons/ri';

export const StyledButton = styled.button`
	width: 100%;
	padding: 10px 15px;

	border: none;

	color: #000;
	background: #fed36a;
	cursor: pointer;

	font-size: 18px;
	font-weight: 600;
	line-height: 2.1;

	&.contactDelete {
		width: auto;
		padding: 0 10px;

		display: flex;
		align-items: center;
	}
`;

export const DeleteIcon = styled(RiDeleteBin5Line)`
	width: 25px;
	height: 25px;
`;
