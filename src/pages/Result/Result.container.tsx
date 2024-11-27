import { useNavigate } from 'react-router';
import { useAppContext } from '../../shared/context/AppContext';
import { useQuiz } from '../../shared/hooks';
import { Result } from './Result';

export const ResultContainer = () => {
	const { score, resetQuiz, resetScore } = useAppContext();
	const { quiz } = useQuiz();
	const navigate = useNavigate();

	if (quiz === undefined || score === undefined) {
		return null;
	}

	const scorePercentage = Math.round((score / quiz.length) * 100);

	const onHomeButtonClick = () => {
		resetScore();
		resetQuiz();
		navigate('/');
	};

	return (
		<Result
			scorePercentage={scorePercentage}
			quiz={quiz}
			onHomeButtonClick={onHomeButtonClick}
		/>
	);
};
