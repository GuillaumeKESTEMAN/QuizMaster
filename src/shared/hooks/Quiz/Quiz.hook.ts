// TODO: faire un hook pour récupérer quiz depuis le contexte ou navigate vers home

import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import type { TUseQuiz } from './types';

export const useQuiz = (): TUseQuiz => {
	const { quiz } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (quiz === undefined) {
			navigate('/');
		}
	}, [navigate, quiz]);

	return { quiz };
};
