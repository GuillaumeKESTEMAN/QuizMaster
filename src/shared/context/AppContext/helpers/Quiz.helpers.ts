import type { Dispatch, SetStateAction } from 'react';
import type { TQuestion } from '../../../types';

export const addQuestionToQuizHelper = (
	newQuestion: TQuestion,
	setQuiz: Dispatch<SetStateAction<TQuestion[] | undefined>>
) => {
	setQuiz((prevQuiz) => {
		if (prevQuiz) {
			return [...prevQuiz, newQuestion];
		}
		return [newQuestion];
	});
};

export const resetQuizHelper = (
	setQuiz: Dispatch<SetStateAction<TQuestion[] | undefined>>
) => {
	setQuiz(undefined);
};
