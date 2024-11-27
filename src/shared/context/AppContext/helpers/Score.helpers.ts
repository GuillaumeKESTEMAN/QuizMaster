import type { Dispatch, SetStateAction } from 'react';

export const incrementScoreHelper = (
	setScore: Dispatch<SetStateAction<number>>
) => {
	setScore((prevScore) => (prevScore ? prevScore + 1 : 1));
};

export const resetScoreHelper = (
	setScore: Dispatch<SetStateAction<number>>
) => {
	setScore(0);
};
