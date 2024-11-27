import { Svg, Title } from '@axa-fr/design-system-look-and-feel-react';
import quizIcon from '@material-symbols/svg-400/rounded/quiz.svg';
import { Page } from '../../shared/components/Page';
import { QuizParamsForm } from './QuizParamsForm';

export const Home = () => {
	return (
		<Page>
			<Title
				icon={<Svg src={quizIcon} />}
				firstSubtitle="Répondez à des QCM en anglais en fonction des paramètres choisis."
				secondSubtitle="Testez vos connaissances maintenant !"
				classModifier="home"
			>
				Bienvenue sur QuizMaster
			</Title>
			<QuizParamsForm />
		</Page>
	);
};
