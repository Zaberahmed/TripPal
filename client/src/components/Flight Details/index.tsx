import { Text, Flex, Icon, VStack } from '@chakra-ui/react';
import { FaPlane } from 'react-icons/fa';

interface FlightDetailsProps {
	originStationCode: string;
	destinationStationCode: string;
	departureDateTime: string;
	arrivalDateTime: string;
	originAirportName?: string;
	destinationAirportName?: string;
	numStops: number;
	displayName: string;
	logoUrl: string;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ originStationCode, destinationStationCode, departureDateTime, arrivalDateTime, originAirportName, destinationAirportName, numStops }) => {
	const formatTime = (dateTime: string) => {
		const date = new Date(dateTime);
		return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	};

	// Function to format date
	const formatDate = (dateTime: string) => {
		const date = new Date(dateTime);
		return `${date.getDate()}th ${date.toLocaleString('default', { month: 'long' })}, ${date.getFullYear()}`;
	};

	const calculateDuration = (departureTime: string, arrivalTime: string) => {
		const departureDate = new Date(departureTime);
		const arrivalDate = new Date(arrivalTime);
		const durationInMinutes = (arrivalDate.getTime() - departureDate.getTime()) / (60 * 1000);
		const hours = Math.floor(durationInMinutes / 60);
		const minutes = durationInMinutes % 60;
		return `${hours}h ${minutes}m`;
	};
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
					<Text
						as="b"
						fontSize={'1.25rem'}
						fontWeight={'700'}>
						{originStationCode}
					</Text>
					<Text
						as="b"
						fontSize={'1rem'}
						fontWeight={'700'}>
						{formatTime(departureDateTime)}
					</Text>
					<Text>Hazrat Shahjalal</Text>
					<Text>{formatDate(departureDateTime)}</Text>
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
					<Text>{numStops === 0 ? 'Non-stop' : `${numStops} Stops`}</Text>
					<Text>{calculateDuration(departureDateTime, arrivalDateTime)}</Text>
				</VStack>
				<VStack
					flex={1 / 3}
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					<Text
						as="b"
						fontSize={'1.25rem'}
						fontWeight={'700'}>
						{destinationStationCode}
					</Text>
					<Text
						as="b"
						fontSize={'1rem'}
						fontWeight={'700'}>
						{formatTime(arrivalDateTime)}
					</Text>
					<Text>Cox's Bazar Airport</Text>
					<Text> {formatDate(arrivalDateTime)}</Text>
				</VStack>
			</Flex>
		</>
	);
};

export default FlightDetails;
