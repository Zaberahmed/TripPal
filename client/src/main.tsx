import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { theme } from './theme.ts';
import { Provider } from 'react-redux';
import { store } from './rtk-store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={theme}>
		<Provider store={store}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Provider>
	</ChakraProvider>
);
