import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100%;
`;

export const FieldWrapper = styled.div`
	width: 100%;
	margin-bottom: 10px;
`;

export const Label = styled.label`
	display: block;
	font-size: 18px;
	font-weight: 500;
`;

export const ContactInput = styled(Field)`
	border: 1px solid rgb(0, 0, 0, 35%);
	border-radius: 5px;
	width: 100%;
	padding: 5px 20px;
`;

export const Button = styled.button`
	max-width: 100%;
	padding: 5px 40px;
	border: 1px solid rgb(0, 0, 0, 15%);
	border-radius: 5px;
	text-align: center;
	background: rgb(76, 154, 255);
	color: white;
	cursor: pointer;

	font-size: 18px;
	font-weight: 500;
`;
