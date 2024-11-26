import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { AppContextProvider } from './shared/context/AppContext';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContextProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
		</AppContextProvider>
	</StrictMode>
);
