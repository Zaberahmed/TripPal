import { Center, Flex } from '@chakra-ui/react';
import TripInfoBox from '../../components/Trip Info Box';
import FlightFilterButton from '../../components/Flight Filter Button';

const FlightPage = () => {
	return (
		<>
			<TripInfoBox />
			<Center>
				<Flex
					bg={'#fafafa'}
					mt={'2rem'}
					w={'20rem'}>
					<FlightFilterButton text={'Earliest Flights'} />
					<FlightFilterButton text={'Cheapest Flights'} />
					<FlightFilterButton text={'Fastest Flights'} />
				</Flex>
			</Center>
		</>
	);
};

export default FlightPage;
