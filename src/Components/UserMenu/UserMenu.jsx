import { useDispatch } from 'react-redux';
import { Menu, UserName } from './UserMenu.styled';
import { logOut } from 'redax/auth/operation';
import { useAuth } from 'hooks';
import { Button } from 'Components/Button/Button';

export const UserMenu = () => {
	const { user } = useAuth();
	const dispatch = useDispatch();

	const onLogOutHandler = () => {
		dispatch(logOut());
	};

	return (
		<Menu>
			<UserName>{user.name}</UserName>
			<Button onClick={onLogOutHandler}>Log out</Button>
		</Menu>
	);
};
