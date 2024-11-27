import type { TQuizFormProps } from './types';

export const answersToRadioSelectOptions = (
	answers: string[]
): TQuizFormProps['answers'] =>
	answers.map((answer, index) => ({
		label: answer,
		value: index,
	}));
