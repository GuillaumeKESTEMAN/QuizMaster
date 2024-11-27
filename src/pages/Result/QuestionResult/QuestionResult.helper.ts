export const getClassModifierByAnswer = (
	answerIndex: number,
	correctAnswerIndex: number,
	userAnswerIndex?: number
) => {
	if (answerIndex === correctAnswerIndex) {
		return 'correct';
	}
	if (userAnswerIndex === answerIndex) {
		return 'incorrect';
	}
	return undefined;
};
