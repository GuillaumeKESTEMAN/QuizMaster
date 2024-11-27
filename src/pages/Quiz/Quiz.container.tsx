import { useState, type ChangeEventHandler, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../shared/context/AppContext';
import { useQuiz } from '../../shared/hooks';
import { Quiz } from './Quiz';
import { answersToRadioSelectOptions } from './Quiz.helpers';

export const QuizContainer = () => {
	const { setUserAnswer, incrementScore } = useAppContext();
	const { quiz } = useQuiz();
	const [questionIndex, setQuestionIndex] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const navigate = useNavigate();

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

		setUserAnswer(questionIndex, Number(selectedAnswer));
		if (Number(selectedAnswer) === quiz[questionIndex].correctAnswerIndex) {
			incrementScore();
		}

		if (questionIndex + 1 < quiz.length) {
			setSelectedAnswer(undefined);
			setQuestionIndex(questionIndex + 1);
		} else {
			navigate('/result', { replace: true });
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
