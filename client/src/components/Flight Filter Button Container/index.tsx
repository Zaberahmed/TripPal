import { Center, Flex } from '@chakra-ui/react';
import FlightFilterButton from '../Flight Filter Button';

const FlightFilterButtonContainer = () => {
	return (
		<Center>
			<Flex
				bg={'#f5f5dc'}
				m={'2rem 0'}
				w={'20rem'}>
				<FlightFilterButton
					text={'Earliest Flights'}
					onClick={() => filterFlights('Earliest Flights')}
				/>
				<FlightFilterButton
					text={'Cheapest Flights'}
					onClick={() => filterFlights('Cheapest Flights')}
				/>
				<FlightFilterButton
					text={'Fastest Flights'}
					onClick={() => filterFlights('Fastest Flights')}
				/>
			</Flex>
		</Center>
	);
};

export default FlightFilterButtonContainer;
