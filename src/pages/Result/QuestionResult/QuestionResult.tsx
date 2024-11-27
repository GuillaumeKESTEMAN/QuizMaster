import {
	ContentItemMono,
	List,
	Svg,
} from '@axa-fr/design-system-look-and-feel-react';
import cancelIcon from '@material-symbols/svg-400/rounded/cancel.svg';
import checkCircleIcon from '@material-symbols/svg-400/rounded/check_circle.svg';
import { getClassModifierByAnswer } from './QuestionResult.helper';
import type { TQuestionResultProps } from './types';

export const QuestionResult = ({
	question,
	answers,
	correctAnswerIndex,
	userAnswerIndex,
}: TQuestionResultProps) => (
	<List classModifier="first-separator-full-width">
		<p>{question}</p>
		{answers.map((answer, answerIndex) => (
			<ContentItemMono
				key={answer}
				leftElement={
					<Svg
						src={
							correctAnswerIndex === answerIndex
								? checkCircleIcon
								: cancelIcon
						}
					/>
				}
				classModifier={getClassModifierByAnswer(
					answerIndex,
					correctAnswerIndex,
					userAnswerIndex
				)}
			>
				{answer}
			</ContentItemMono>
		))}
	</List>
);
