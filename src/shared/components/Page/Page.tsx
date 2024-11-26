import type { TPageProps } from './types';

export const Page = ({ children }: TPageProps) => (
	<main className="page">{children}</main>
);
