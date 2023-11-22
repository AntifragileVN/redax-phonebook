import { StyledButton } from './Button.styled';

export const Button = ({ children, onClick, ...props }) => {
	return (
		<StyledButton onClick={onClick} {...props}>
			{children}
		</StyledButton>
	);
};
