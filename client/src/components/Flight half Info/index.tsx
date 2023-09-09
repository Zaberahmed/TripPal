import { VStack, Text } from '@chakra-ui/react';
import { airportDictionary } from '../../data/airportDictionary';
import { formatDate } from '../../utils/_helperFunctions/formatDate';
import { formatTime } from '../../utils/_helperFunctions/formatTime';

type FlightHalfInfo = {
	stationCode: string;
	dateTime: string;
};

const FlightHalfInfo = ({ stationCode, dateTime }: FlightHalfInfo) => {
	return (
		<VStack
			flex={1 / 3}
			textAlign={'center'}
			fontSize={'.625rem'}
			fontWeight={'500'}>
			<Text
				as="b"
				fontSize={'1.25rem'}
				fontWeight={'700'}>
				{stationCode}
			</Text>
			<Text
				as="b"
				fontSize={'1rem'}
				fontWeight={'700'}>
				{formatTime(dateTime)}
			</Text>
			<Text>{(airportDictionary as { [key: string]: string })[stationCode]}</Text>
			<Text> {formatDate(dateTime)}</Text>
		</VStack>
	);
};

export default FlightHalfInfo;
