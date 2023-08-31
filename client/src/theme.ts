import { extendTheme } from '@chakra-ui/react';

const colors = {
	primary: '#FaFaFa', // beige
	secondary: '#013B82', // navy blue
	action: '#007BFF', //sky blue
	urgent: '#FECB04', //yellow sun
	hightlights: '#56CC9D', //seafoam green
	cautious: '#ed411a', // sunset orange
};

export const theme = extendTheme({ colors });
