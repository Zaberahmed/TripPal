import { Box, Button, Flex, VStack, Text } from '@chakra-ui/react';

import ShowMoreInfo from '../Show More';
import FlightDetails from '../Flight Details';

const FlightFullInfoCard = () => {
	return (
		<Box
			bg={'beige'}
			p={'.5rem'}
			boxShadow={'lg'}
			borderRadius={'lg'}>
			<Flex
				mb={'1rem'}
				direction={'column'}>
				<FlightDetails />
				<Flex
					p={'.5rem'}
					mt={'1rem'}
					justifyContent={'space-between'}
					alignItems={'center'}
					gap={'2rem'}>
					<VStack>
						<Text
							textAlign={'center'}
							fontSize={'1.5rem'}
							fontWeight={'600'}
							color={'actionPrimary'}>
							152 USD
						</Text>
						<Text
							textAlign={'center'}
							fontSize={'.625rem'}
							fontWeight={'500'}>
							(per person)
						</Text>
					</VStack>
					<Text></Text>
					<Button
						bg={'actionSecondary'}
						borderRadius={'md'}
						boxShadow={'md'}
						color={'primary'}>
						Book Now
					</Button>
				</Flex>
			</Flex>
			<ShowMoreInfo />
		</Box>
	);
};

export default FlightFullInfoCard;
