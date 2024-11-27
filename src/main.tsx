import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { AppContextProvider } from './shared/context/AppContext';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AppContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/quiz" element={<Quiz />} />
				</Routes>
			</BrowserRouter>
		</AppContextProvider>
	</StrictMode>
);
