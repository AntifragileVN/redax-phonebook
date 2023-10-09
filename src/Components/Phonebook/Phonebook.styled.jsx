import styled from 'styled-components';
import { Field, Form } from 'formik';

const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid rgb(0, 0, 0, 15%);
	box-shadow: 0px 0px 5px rgb(0, 0, 0, 15%);
	border-radius: 5px;

	margin-bottom: 30px;
	max-width: 450px;
	padding: 25px 35px;
	width: 600px;
	hight: 300px;
`;

const Label = styled.label`
	font-size: 18px;
	font-weight: 500;
`;

const ContactInput = styled(Field)`
	border: 2px solid rgb(0, 0, 0, 15%);
	box-shadow: 0px 0px 5px rgb(0, 0, 0, 15%);
	border-radius: 5px;
	margin-bottom: 10px;
	max-width: 100%;
	padding: 5px 20px;
`;

const Button = styled.button`
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

export { FormStyled, Label, ContactInput, Button };
