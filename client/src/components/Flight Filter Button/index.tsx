import { Button, Text } from '@chakra-ui/react';

type FilterButton = {
	text: string;
};

const FlightFilterButton = ({ text }: FilterButton) => {
	return (
		<Button
			_selected={{ bg: 'actionPrimary', color: 'primary', cursor: 'pointer', transition: 'all .2s ease-out' }}
			h={'3rem'}
			w={'33.33333%'}
			p={'.25rem .5rem '}
			bg={'inherit'}
			borderRadius={'none'}
			borderRight={'2px solid #e5e5ea'}
			_last={{ borderRight: 'none' }}
			transition={'all .2s ease-in'}>
			<Text
				whiteSpace={'break-spaces'}
				textAlign={'center'}>
				{text}
			</Text>
		</Button>
	);
};

export default FlightFilterButton;
