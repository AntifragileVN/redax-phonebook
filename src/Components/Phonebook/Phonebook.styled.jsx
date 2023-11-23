import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
	background: #212832;
`;

export const InputWrapper = styled.div`
	background: #455a64;
	position: relative;
	display: flex;
	align-items: center;
`;

export const FieldWrapper = styled.div`
	padding-bottom: 20px;
`;

export const Label = styled.label`
	color: #8caab9;
	font-size: 18px;
	margin-bottom: 15px;
`;

export const ContactInput = styled(Field)`
	width: 100%;
	padding-top: 17px;
	padding-bottom: 17px;
	padding-left: 40px;
	border: none;
	background: #455a64;

	font-size: 18px;
	color: inherit;
`;
