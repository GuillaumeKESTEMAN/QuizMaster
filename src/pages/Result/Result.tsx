import {
	Button,
	Svg,
	Title,
	TitleSize,
} from '@axa-fr/design-system-look-and-feel-react';
import cancelIcon from '@material-symbols/svg-400/rounded/cancel.svg';
import checkCircleIcon from '@material-symbols/svg-400/rounded/check_circle.svg';
import { Page } from '../../shared/components/Page';
import { QuestionResult } from './QuestionResult';
import type { TResultProps } from './types';

export const Result = ({
	scorePercentage,
	quiz,
	onHomeButtonClick,
}: TResultProps) => (
	<Page>
		<div className="result-title">
			<Title
				icon={
					<Svg
						src={
							scorePercentage >= 50 ? checkCircleIcon : cancelIcon
						}
					/>
				}
			>
				Taux de réussite de {scorePercentage}%
			</Title>
			<Button onClick={onHomeButtonClick}>Revenir à l'accueil</Button>
		</div>
		<div className="result-questions">
			<Title level={2} size={TitleSize.L}>
				Questions :
			</Title>
			<div className="result-questions__answers">
				{quiz.map(
					({
						question,
						answers,
						correctAnswerIndex,
						userAnswerIndex,
					}) => (
						<QuestionResult
							key={question}
							question={question}
							answers={answers}
							correctAnswerIndex={correctAnswerIndex}
							userAnswerIndex={userAnswerIndex}
						/>
					)
				)}
			</div>
		</div>
	</Page>
);
