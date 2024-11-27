import {
	useEffect,
	useState,
	type ChangeEventHandler,
	type FormEvent,
} from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../shared/context/AppContext';
import { Quiz } from './Quiz';
import { answersToRadioSelectOptions } from './Quiz.helpers';

export const QuizContainer = () => {
	const { quiz, incrementScore } = useAppContext();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const navigate = useNavigate();

	useEffect(() => {
		if (quiz === undefined) {
			navigate('/');
		}
	}, [navigate, quiz]);

	if (quiz === undefined) {
		return null;
	}

	const getAnswers = answersToRadioSelectOptions(quiz[questionIndex].answers);

	const onSelectAnswer: ChangeEventHandler<HTMLInputElement> = (event) => {
		if (errorMessage) {
			setErrorMessage(undefined);
		}

		setSelectedAnswer(event.target.value.toString());
	};

	const onAnswer = (event: FormEvent<HTMLElement>) => {
		event.preventDefault();

		if (quiz === undefined) return;
		if (selectedAnswer === undefined) {
			setErrorMessage('Veuillez sélectionner une réponse.');
			return;
		}

		const answerIndex = Number(
			quiz[questionIndex].answers[Number(selectedAnswer)]
		);

		if (answerIndex === quiz[questionIndex].correctAnswerIndex) {
			incrementScore();
		}

		if (questionIndex + 1 < quiz.length) {
			setQuestionIndex(questionIndex + 1);
		} else {
			// Handle the end of the quiz here.
		}
	};

	return (
		<Quiz
			question={quiz[questionIndex].question}
			answers={getAnswers}
			questionIndex={questionIndex + 1}
			questionsCount={quiz.length}
			errorMessage={errorMessage}
			onSelectAnswer={onSelectAnswer}
			onAnswer={onAnswer}
		/>
	);
};