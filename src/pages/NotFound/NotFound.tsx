import { Button, Svg, Title } from '@axa-fr/design-system-look-and-feel-react';
import searchOffIcon from '@material-symbols/svg-400/rounded/search_off.svg';
import { Page } from '../../shared/components/Page';
import type { TNotFoundProps } from './types';

export const NotFound = ({ onHomeButtonClick }: TNotFoundProps) => {
	return (
		<Page>
			<div className="centered-container">
				<Title
					icon={<Svg src={searchOffIcon} />}
					firstSubtitle="Cette page n'a pas l'air d'exister 🤔"
				>
					Erreur 404
				</Title>
				<Button onClick={onHomeButtonClick}>Revenir à l'accueil</Button>
			</div>
		</Page>
	);
};
