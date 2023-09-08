import { Text, Flex, Center, Button, Box, Badge } from '@chakra-ui/react';

const TripInfoBox = () => {
	return (
		<Flex
			gap={'.25rem'}
			p={'.5rem'}
			direction={'column'}
			alignItems={'center'}
			boxShadow={'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px'}
			bg={'beige'}
			borderRadius={'md'}>
			<Badge
				p={'.25rem'}
				colorScheme="orange"
				borderRadius={'md'}
				m={'.25rem 0'}>
				<Text fontSize={'.875rem'}>DAC (Dhaka) - CXB (Cox's Bazar)</Text>
			</Badge>

			<Flex gap={'.25rem'}>
				<Badge
					p={'.25rem'}
					colorScheme="blue"
					borderRadius={'md'}
					m={'.25rem 0'}>
					<Text fontSize={'.875rem'}>9th September, 2023</Text>
				</Badge>

				<Badge
					p={'.25rem'}
					colorScheme="green"
					borderRadius={'md'}
					m={'.25rem 0'}>
					<Text fontSize={'.875rem'}>Economy</Text>
				</Badge>
				<Badge
					p={'.25rem'}
					colorScheme="blue"
					borderRadius={'md'}
					m={'.25rem 0'}>
					<Text fontSize={'.875rem'}>1 person</Text>
				</Badge>
			</Flex>

			<Button
				mt={'1.5rem'}
				bg={'actionPrimary'}
				color={'primary'}
				variant="solid">
				Modify Search
			</Button>
		</Flex>
	);
};

export default TripInfoBox;
