import {
	useState,
	type ChangeEventHandler,
	type FormEvent,
	type FormEventHandler,
} from 'react';
import {
	CATEGORY_OPTIONS,
	DIFFICULTY_OPTIONS,
	TYPE_OPTIONS,
} from './constants';
import { QuizParamsForm } from './QuizParamsForm';
import { QuizParamsFormToDto } from './QuizParamsForm.helper';
import { TQuizParamsForm } from './types';

export const QuizParamsFormContainer = () => {
	const [quizParams, setQuizParams] = useState<TQuizParamsForm>({
		questionNumber: 10,
		category: CATEGORY_OPTIONS[0],
		difficulty: DIFFICULTY_OPTIONS[0],
		type: TYPE_OPTIONS[0],
	});

	const onSubmit: FormEventHandler<HTMLFormElement> = (
		e: FormEvent<HTMLElement>
	) => {
		e.preventDefault();
		console.log(QuizParamsFormToDto(quizParams));
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

		setQuizParams({
			...quizParams,
			questionNumber: Number(event.target.value),
		});
	};

	const handleCategoryChange = (category: TQuizParamsForm['category']) => {
		setQuizParams({ ...quizParams, category });
	};

	const handleDifficultyChange = (
		difficulty: TQuizParamsForm['difficulty']
	) => {
		setQuizParams({ ...quizParams, difficulty });
	};

	const handleTypeChange = (type: TQuizParamsForm['type']) => {
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
		/>
	);
};
