import {
	Alert,
	Button,
	Select,
	TextInput,
} from '@axa-fr/design-system-look-and-feel-react';
import type { ComponentProps } from 'react';
import {
	CATEGORY_OPTIONS,
	DIFFICULTY_OPTIONS,
	TYPE_OPTIONS,
} from './constants';
import type { TQuizParamsFormProps } from './types';

export const QuizParamsForm = ({
	questionNumber,
	category,
	difficulty,
	type,
	onCategoryChange,
	onDifficultyChange,
	onQuestionNumberChange,
	onTypeChange,
	onSubmit,
	fetchError,
}: TQuizParamsFormProps) => (
	<form className="quiz-params-form" onSubmit={onSubmit}>
		<TextInput
			type="number"
			required
			label="Nombre de questions :"
			value={questionNumber}
			onChange={onQuestionNumberChange}
		/>
		<div className="quiz-params-form__select-input">
			<Select
				id="category"
				value={category}
				label="Catégorie des questions :"
				options={
					CATEGORY_OPTIONS as ComponentProps<typeof Select>['options']
				}
				onChange={onCategoryChange}
				required
			/>
		</div>
		<div className="quiz-params-form__select-input">
			<Select
				id="difficulty"
				value={difficulty}
				label="Difficulté des questions :"
				options={
					DIFFICULTY_OPTIONS as ComponentProps<
						typeof Select
					>['options']
				}
				onChange={onDifficultyChange}
				required
			/>
		</div>
		<div className="quiz-params-form__select-input">
			<Select
				id="type"
				value={type}
				label="Type de questions :"
				options={
					TYPE_OPTIONS as ComponentProps<typeof Select>['options']
				}
				onChange={onTypeChange}
				required
			/>
		</div>

		{fetchError && <Alert type={'error'}>{fetchError}</Alert>}

		<Button type="submit">Commencer le Quiz</Button>
	</form>
);
