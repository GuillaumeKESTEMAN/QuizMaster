import { decodeHtml } from '../../../shared/helpers';
import type { TQuestion } from '../../../shared/types';
import type { TQuestionsResponse, TQuizParams, TQuizParamsDto } from './types';

export const quizParamsToDto = ({
	questionNumber,
	category,
	difficulty,
	type,
}: TQuizParams): TQuizParamsDto => {
	const quizParamsDto: TQuizParamsDto = {
		amount: questionNumber === -1 ? '10' : questionNumber.toString(),
	};

	if (category !== undefined && category?.value !== -1) {
		quizParamsDto.category = category?.value.toString();
	}

	if (difficulty !== undefined && difficulty?.value !== '') {
		quizParamsDto.difficulty = difficulty?.value.toString();
	}

	if (type !== undefined && type?.value !== '') {
		quizParamsDto.type = type?.value.toString();
	}

	return quizParamsDto;
};

export const questionsResponseToQuestions = (
	quizQuestionsResponse: TQuestionsResponse
): TQuestion[] =>
	quizQuestionsResponse.results.map(
		({ question, correct_answer, incorrect_answers }): TQuestion => {
			const answers: string[] = [...incorrect_answers, correct_answer];
			answers.sort(() => Math.random() - 0.5);

			return {
				question: decodeHtml(question),
				answers: answers.map(decodeHtml),
				correctAnswerIndex: answers.indexOf(correct_answer),
			};
		}
	);
