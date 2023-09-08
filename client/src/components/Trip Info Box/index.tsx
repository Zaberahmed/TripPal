import { Text, Flex, Center, Button } from '@chakra-ui/react';

const TripInfoBox = () => {
	return (
		<Flex
			textAlign={'center'}
			gap={'.25rem'}
			direction={'column'}
			p={'.5rem'}
			boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}
			bg={'#f5f5dc'}
			borderRadius={'md'}>
			<Text align={'center'}>DAC (Dhaka) - CXB (Cox's Bazar)</Text>
			<Text>9th September, 2023</Text>
			<Text>1 person</Text>
			<Text>Economy</Text>
			<Center>
				<Button
					mt={'1.5rem'}
					bg={'actionPrimary'}
					color={'primary'}
					variant="solid">
					Modify Search
				</Button>
			</Center>
		</Flex>
	);
};

export default TripInfoBox;
