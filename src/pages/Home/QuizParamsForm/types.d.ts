import { Select } from '@axa-fr/design-system-look-and-feel-react';
import type {
	ChangeEventHandler,
	ComponentProps,
	FormEventHandler,
} from 'react';

export type TQuizParams = {
	questionNumber: number;
	category: ComponentProps<typeof Select>['value'];
	difficulty: ComponentProps<typeof Select>['value'];
	type: ComponentProps<typeof Select>['value'];
};

export type TQuizParamsDto = {
	amount: string;
	category?: string;
	difficulty?: string;
	type?: string;
};

export type TQuizParamsFormProps = {
	onSubmit: FormEventHandler<HTMLFormElement>;
	onQuestionNumberChange: ChangeEventHandler<HTMLInputElement>;
	onCategoryChange: (category: SingleValue<TQuizParams['category']>) => void;
	onDifficultyChange: (
		difficulty: SingleValue<TQuizParams['difficulty']>
	) => void;
	onTypeChange: (type: SingleValue<TQuizParams['type']>) => void;
	fetchError: string | undefined;
} & TQuizParams;
