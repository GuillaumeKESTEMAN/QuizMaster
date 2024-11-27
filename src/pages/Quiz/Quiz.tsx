import {
	Alert,
	Button,
	RadioSelect,
	Title,
} from '@axa-fr/design-system-look-and-feel-react';
import { Page } from '../../shared/components/Page';
import type { TQuizProps } from './types';

export const Quiz = ({
	question,
	questionIndex,
	questionsCount,
	answers,
	errorMessage,
	onSelectAnswer,
	onAnswer,
}: TQuizProps) => (
	<Page>
		<Title firstSubtitle={question}>
			Question {questionIndex}/{questionsCount} :
		</Title>
		<form className="quiz-form" onSubmit={onAnswer}>
			<RadioSelect
				isRequired
				type="vertical"
				options={answers}
				name={`question-${questionIndex}`}
				onChange={onSelectAnswer}
			/>
			{errorMessage && <Alert type="error">{errorMessage}</Alert>}
			<Button type="submit">
				{questionIndex === questionsCount ? 'Valider' : 'Suivant'}
			</Button>
		</form>
	</Page>
);
