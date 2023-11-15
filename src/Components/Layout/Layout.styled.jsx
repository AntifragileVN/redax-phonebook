import styled from 'styled-components';

export const Layout = styled.div`
	max-width: 500px;
	margin: 0 auto;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Section = styled.section`
	width: 100%;
	border-radius: 5px;
	margin-bottom: 10px;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0px 15px 11px -3px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
	text-align: center;
	font-weight: 600;
`;
