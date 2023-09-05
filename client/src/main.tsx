import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { chakraTheme } from './chakraTheme.ts';
import { Provider } from 'react-redux';
import { store } from './rtk-store/store.ts';
import { ThemeProvider } from '@mui/material';
import muiTheme from './muiTheme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ChakraProvider theme={chakraTheme}>
		<ThemeProvider theme={muiTheme}>
			<Provider store={store}>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Provider>
		</ThemeProvider>
	</ChakraProvider>
);
