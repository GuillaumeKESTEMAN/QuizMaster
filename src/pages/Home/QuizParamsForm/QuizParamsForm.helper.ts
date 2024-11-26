import type { TQuizParamsForm, TQuizParamsFormDto } from './types';

export const QuizParamsFormToDto = ({
	questionNumber,
	category,
	difficulty,
	type,
}: TQuizParamsForm): TQuizParamsFormDto => ({
	questionNumber: questionNumber,
	category: category?.value.toString() ?? '',
	difficulty: difficulty?.value.toString() ?? '',
	type: type?.value.toString() ?? '',
});
