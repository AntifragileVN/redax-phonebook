import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiLock } from 'react-icons/fi';
import styled from 'styled-components';

export const Form = styled.form`
	background: #212832;
`;

export const Label = styled.label`
	color: #8caab9;
	font-size: 18px;
	margin-bottom: 15px;
`;

export const InputWrapper = styled.div`
	background: #455a64;
	position: relative;
	display: flex;
	align-items: center;
	margin-bottom: 25px;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding-top: 17px;
	padding-bottom: 17px;
	padding-left: 40px;
	border: none;
	background: #455a64;

	font-size: 18px;
	color: inherit;
`;

export const StyledIcon = styled(IoPersonCircleOutline)`
	position: absolute;
	left: 10px;
	width: 25px;
	height: 25px;
`;

export const UserIcon = styled(IoPersonCircleOutline)`
	position: absolute;
	left: 10px;
	width: 25px;
	height: 25px;
`;

export const EmailIcon = styled(MdOutlineAlternateEmail)`
	position: absolute;
	left: 10px;
	width: 25px;
	height: 25px;
`;

export const PasswordIcon = styled(FiLock)`
	position: absolute;
	left: 10px;
	width: 25px;
	height: 25px;
`;
