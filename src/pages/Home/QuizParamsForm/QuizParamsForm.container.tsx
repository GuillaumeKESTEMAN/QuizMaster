import {
	useState,
	type ChangeEventHandler,
	type FormEvent,
	type FormEventHandler,
} from 'react';
import { useAppContext } from '../../../shared/context/AppContext';
import {
	CATEGORY_OPTIONS,
	DIFFICULTY_OPTIONS,
	TYPE_OPTIONS,
} from './constants';
import { QuizParamsForm } from './QuizParamsForm';
import {
	questionsResponseToQuestions,
	quizParamsToDto,
} from './QuizParamsForm.helper';
import type { TQuestionsResponse, TQuizParams } from './types';

export const QuizParamsFormContainer = () => {
	const [quizParams, setQuizParams] = useState<TQuizParams>({
		questionNumber: 10,
		category: CATEGORY_OPTIONS[0],
		difficulty: DIFFICULTY_OPTIONS[0],
		type: TYPE_OPTIONS[0],
	});
	const [fetchError, setFetchError] = useState<undefined | string>();
	const { setQuiz } = useAppContext();

	const onSubmit: FormEventHandler<HTMLFormElement> = (
		e: FormEvent<HTMLElement>
	) => {
		e.preventDefault();

		fetch(
			'https://opentdb.com/api.php?' +
				new URLSearchParams(quizParamsToDto(quizParams)).toString()
		)
			.then(async (response) => {
				const questionsResponse: TQuestionsResponse =
					await response.json();
				setQuiz(questionsResponseToQuestions(questionsResponse));
			})
			.catch(() => {
				setFetchError(
					'Une erreur est survenue lors de la récupération des questions du quiz.'
				);
			});
	};

	const handleQuestionNumberChange: ChangeEventHandler<HTMLInputElement> = (
		event
	) => {
		if (
			!/^\d+$/.test(event.target.value) ||
			Number(event.target.value) > 50 ||
			Number(event.target.value) === 0
		) {
			return;
		}

		setFetchError(undefined);
		setQuizParams({
			...quizParams,
			questionNumber: Number(event.target.value),
		});
	};

	const handleCategoryChange = (category: TQuizParams['category']) => {
		setFetchError(undefined);
		setQuizParams({ ...quizParams, category });
	};

	const handleDifficultyChange = (difficulty: TQuizParams['difficulty']) => {
		setFetchError(undefined);
		setQuizParams({ ...quizParams, difficulty });
	};

	const handleTypeChange = (type: TQuizParams['type']) => {
		setFetchError(undefined);
		setQuizParams({ ...quizParams, type });
	};

	return (
		<QuizParamsForm
			onSubmit={onSubmit}
			questionNumber={quizParams.questionNumber}
			category={quizParams.category}
			difficulty={quizParams.difficulty}
			type={quizParams.type}
			onQuestionNumberChange={handleQuestionNumberChange}
			onCategoryChange={handleCategoryChange}
			onDifficultyChange={handleDifficultyChange}
			onTypeChange={handleTypeChange}
			fetchError={fetchError}
		/>
	);
};
