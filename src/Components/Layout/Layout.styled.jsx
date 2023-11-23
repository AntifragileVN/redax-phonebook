import styled from 'styled-components';

export const Container = styled.div`
	padding: 0 15px;
	margin-left: auto;
	margin-right: auto;

	@media screen and (max-width: 967px) {
		max-width: 560px;
	}

	@media screen and (min-width: 968px) {
		width: 900px;
	}
`;

export const Section = styled.section`
	margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
	text-align: center;
	font-weight: 600;
`;
