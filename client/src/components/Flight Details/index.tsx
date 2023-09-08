import { Text, Button, Flex, Icon, VStack } from '@chakra-ui/react';
import { FaPlane } from 'react-icons/fa';

const FlightDetails = () => {
	return (
		<>
			<Flex
				gap={'.75rem'}
				alignItems={'center'}>
				<VStack
					flex={1 / 3}
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					{/* <Image>Airline Logo</Image> */}
					<Text
						as="b"
						fontSize={'1.25rem'}
						fontWeight={'700'}>
						DAC
					</Text>
					<Text
						as="b"
						fontSize={'1rem'}
						fontWeight={'700'}>
						15:30
					</Text>
					<Text>Shahjalal International Airport</Text>
					<Text>9th September, 2023</Text>
				</VStack>
				<VStack
					flex={1 / 3}
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					<Icon
						as={FaPlane}
						color={'actionPrimary'}
						boxSize={'1rem'}
					/>
					<Text>Non-stop</Text>
					<Text>01h 05m</Text>
				</VStack>
				<VStack
					flex={1 / 3}
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					{/* <Image>Airline Logo</Image> */}
					<Text
						as="b"
						fontSize={'1.25rem'}
						fontWeight={'700'}>
						CXB
					</Text>
					<Text
						as="b"
						fontSize={'1rem'}
						fontWeight={'700'}>
						16:05
					</Text>
					<Text>Cox's Bazar Airport</Text>
					<Text>9th September, 2023</Text>
				</VStack>
			</Flex>
		</>
	);
};

export default FlightDetails;
