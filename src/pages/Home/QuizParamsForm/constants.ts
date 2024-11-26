import type { Select } from '@axa-fr/design-system-look-and-feel-react';
import type { ComponentProps } from 'react';

export const CATEGORY_OPTIONS: ComponentProps<typeof Select>['value'][] = [
	{
		label: 'Toutes les catégories',
		value: 'any',
	},
	{
		label: 'Culture Générale',
		value: 'general',
	},
	{
		label: 'Sports',
		value: 'sports',
	},
	{
		label: 'Histoire',
		value: 'history',
	},
];

export const DIFFICULTY_OPTIONS: ComponentProps<typeof Select>['value'][] = [
	{
		label: 'Toute difficulté',
		value: 'any',
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
		value: 'any',
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
