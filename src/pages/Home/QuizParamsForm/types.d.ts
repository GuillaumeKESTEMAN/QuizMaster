import { Select } from '@axa-fr/design-system-look-and-feel-react';
import type {
	ChangeEventHandler,
	ComponentProps,
	FormEventHandler,
} from 'react';

export const CATEGORY_OPTIONS = [
	{
		label: 'Toutes les catégories',
		value: 'any',
	},
	{
		label: 'Culture Générale',
		value: 'general',
	},
	{
		label: 'Sports',
		value: 'sports',
	},
	{
		label: 'Histoire',
		value: 'history',
	},
] as const;

export type TQuizParamsForm = {
	questionNumber: number;
	category: ComponentProps<typeof Select>['value'];
	difficulty: ComponentProps<typeof Select>['value'];
	type: ComponentProps<typeof Select>['value'];
};

export type TQuizParamsFormDto = {
	questionNumber: number;
	category: string;
	difficulty: string;
	type: string;
};

export type TQuizParamsFormProps = {
	onSubmit: FormEventHandler<HTMLFormElement>;
	onQuestionNumberChange: ChangeEventHandler<HTMLInputElement>;
	onCategoryChange: (
		category: SingleValue<TQuizParamsForm['category']>
	) => void;
	onDifficultyChange: (
		difficulty: SingleValue<TQuizParamsForm['difficulty']>
	) => void;
	onTypeChange: (type: SingleValue<TQuizParamsForm['type']>) => void;
} & TQuizParamsForm;
