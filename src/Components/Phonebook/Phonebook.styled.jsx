import styled from 'styled-components';

const ContactInput = styled.input`
	border: 2 px solid red;
	margin-bottom: 20px;
	max-width: 100%;
	padding: 5px 15px;
`;

const Form = styled.form`
	border: 1px solid black;
	margin-bottom: 30px;
	max-width: 400px;
	padding: 25px 35px;
	width: 600px;
	hight: 300px;

	display: flex;
	flex-direction: column;
`;

export { ContactInput, Form };
