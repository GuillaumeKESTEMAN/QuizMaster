import type { Dispatch, SetStateAction } from 'react';
import type { TQuestion } from '../../../types';

export const resetQuizHelper = (
	setQuiz: Dispatch<SetStateAction<TQuestion[] | undefined>>
) => {
	setQuiz(undefined);
};
