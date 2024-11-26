import type { TQuizParams, TQuizParamsDto } from './types';

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
