import type { TQuestion } from '../../shared/types';

export type TResultProps = {
	scorePercentage: number;
	quiz: TQuestion[];
	onHomeButtonClick: () => void;
};
