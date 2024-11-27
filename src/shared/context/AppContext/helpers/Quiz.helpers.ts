import type { Dispatch, SetStateAction } from 'react';
import type { TQuestion } from '../../../types';


export const setUserAnswerHelper = (
	questionIndex: number,
	userAnswerIndex: number,
	setQuiz: Dispatch<SetStateAction<TQuestion[] | undefined>>
) => {
	setQuiz((currentQuiz) => {
		if (currentQuiz === undefined) return undefined;

		const updatedQuiz = structuredClone(currentQuiz);

		if (updatedQuiz[questionIndex]) {
			updatedQuiz[questionIndex].userAnswerIndex = userAnswerIndex;
		}

		return updatedQuiz;
	});
};

export const resetQuizHelper = (
	setQuiz: Dispatch<SetStateAction<TQuestion[] | undefined>>
) => {
	setQuiz(undefined);
};