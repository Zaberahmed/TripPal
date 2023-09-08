import { Box, Button, Flex, Text, VStack, Image, Icon } from '@chakra-ui/react';
import { BiDollarCircle } from 'react-icons/bi';
import { FaPlane } from 'react-icons/fa';
import ShowMoreInfo from '../Show More';

const FlightInfoCard = () => {
	return (
		<Box
			bg={'beige'}
			p={'.5rem'}
			boxShadow={'lg'}
			borderRadius={'lg'}>
			<Flex
				mb={'1rem'}
				direction={'column'}>
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

export default FlightInfoCard;
