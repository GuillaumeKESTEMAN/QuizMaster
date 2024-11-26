import { useMemo, useState } from 'react';
import type { TQuestion } from '../../types';
import { AppContext } from './AppContext';
import {
	addQuestionToQuizHelper,
	incrementScoreHelper,
	resetQuizHelper,
	resetScoreHelper,
} from './helpers';
import type { TAppContext, TAppContextProvider } from './types';

export const AppContextProvider = ({ children }: TAppContextProvider) => {
	const [quiz, setQuiz] = useState<TQuestion[] | undefined>();
	const [score, setScore] = useState<number>(0);

	const addQuestionToQuiz = (newQuestion: TQuestion) =>
		addQuestionToQuizHelper(newQuestion, setQuiz);

	const resetQuiz = () => resetQuizHelper(setQuiz);

	const incrementScore = () => incrementScoreHelper(setScore);

	const resetScore = () => resetScoreHelper(setScore);

	const appContextValue = useMemo<TAppContext>(
		() => ({
			quiz,
			score,
			addQuestionToQuiz,
			resetQuiz,
			incrementScore,
			resetScore,
		}),
		[quiz, score]
	);

	return (
		<AppContext.Provider value={appContextValue}>
			{children}
		</AppContext.Provider>
	);
};
