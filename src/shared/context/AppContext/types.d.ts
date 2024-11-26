import type { ReactNode } from 'react';
import type { TQuestion } from '../../types';

export type TAppContextProvider = {
	children: ReactNode;
};

export type TAppContext = {
	quiz?: TQuestion[];
	score?: number;
	addQuestionToQuiz: (newQuestion: TQuestion) => void;
	resetQuiz: () => void;
	incrementScore: () => void;
	resetScore: () => void;
};
