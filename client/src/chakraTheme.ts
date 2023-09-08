import { extendTheme } from '@chakra-ui/react';

const colors = {
	primary: '#ECEDF3', // athens gray
	secondary: '#091328', // firefly
	tertiary: '#FECB04', //yellow sun
	ebony: '#0E1420', //ebony
	actionPrimary: '#064CE2', //science blue
	actionSecondary: '#ed411a', // sunset orange
	beige: ' #f5f5dc', //beige
};
const fonts = {
	heading: 'Roboto',
	body: 'Open sans',
};

const Drawer = {
	sizes: {
		menu: {
			dialog: { maxWidth: '13rem' },
		},
	},
};

export const chakraTheme = extendTheme({
	colors,
	fonts,
	components: {
		Drawer,
	},
});
