import type { ChangeEventHandler, FormEventHandler } from 'react';

export type TQuizProps = {
	question: string;
	answers: {
		label: string;
		value: number;
	}[];
	questionIndex: number;
	questionsCount: number;
	errorMessage: string | undefined;
	onSelectAnswer: ChangeEventHandler<HTMLInputElement>;
	onAnswer: FormEventHandler<HTMLFormElement>;
};

export type TQuizFormProps = Pick<TQuizProps, 'answers' | 'onAnswer'>;
