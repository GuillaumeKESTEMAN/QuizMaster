import type { Select } from '@axa-fr/design-system-look-and-feel-react';
import type { ComponentProps } from 'react';

export const CATEGORY_OPTIONS: ComponentProps<typeof Select>['value'][] = [
	{
		label: 'Toutes les catégories',
		value: -1,
	},
	{
		label: 'Culture Générale',
		value: 9,
	},
	{
		label: 'Sports',
		value: 21,
	},
	{
		label: 'Histoire',
		value: 23,
	},
];

export const DIFFICULTY_OPTIONS: ComponentProps<typeof Select>['value'][] = [
	{
		label: 'Toute difficulté',
		value: '',
	},
	{
		label: 'Facile',
		value: 'easy',
	},
	{
		label: 'Moyen',
		value: 'medium',
	},
	{
		label: 'Difficile',
		value: 'hard',
	},
];

export const TYPE_OPTIONS: ComponentProps<typeof Select>['value'][] = [
	{
		label: 'Tout type',
		value: '',
	},
	{
		label: 'Choix multiple',
		value: 'multiple',
	},
	{
		label: 'Vrai/Faux',
		value: 'boolean',
	},
];
