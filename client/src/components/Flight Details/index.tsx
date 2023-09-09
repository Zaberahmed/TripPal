import { Text, Flex, Icon, VStack, Image } from '@chakra-ui/react';
import { FaPlane } from 'react-icons/fa';
import { airportDictionary } from '../../data/airportDictionary';
import { formatTime } from '../../utils/_helperFunctions/formatTime';
import { formatDate } from '../../utils/_helperFunctions/formatDate';
import { calculateDuration } from '../../utils/_helperFunctions/calculateDistance';
import FlightHalfInfo from '../Flight half Info';

interface FlightDetailsProps {
	originStationCode: string;
	destinationStationCode: string;
	departureDateTime: string;
	arrivalDateTime: string;
	numStops: number;
	displayName: string;
	logoUrl: string;
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ originStationCode, destinationStationCode, departureDateTime, arrivalDateTime, numStops, logoUrl, displayName }) => {
	return (
		<>
			<Flex
				gap={'.75rem'}
				alignItems={'center'}>
				<FlightHalfInfo
					stationCode={originStationCode}
					dateTime={departureDateTime}
				/>
				<VStack
					flex={1 / 3}
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					<Image
						src={logoUrl}
						boxSize={'3rem'}></Image>
					<Text>{displayName}</Text>
					<Icon
						as={FaPlane}
						color={'actionPrimary'}
						boxSize={'1rem'}
					/>
					<Text>{numStops === 0 ? 'Non-stop' : `${numStops} Stops`}</Text>
					<Text>{calculateDuration(departureDateTime, arrivalDateTime)}</Text>
				</VStack>
				<FlightHalfInfo
					stationCode={destinationStationCode}
					dateTime={arrivalDateTime}
				/>
			</Flex>
		</>
	);
};

export default FlightDetails;
