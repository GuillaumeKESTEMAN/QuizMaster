import { useNavigate } from 'react-router';
import { NotFound } from './NotFound';

export const NotFoundContainer = () => {
	const navigate = useNavigate();

	const onHomeButtonClick = () => {
		navigate('/');
	};

	return <NotFound onHomeButtonClick={onHomeButtonClick} />;
};
