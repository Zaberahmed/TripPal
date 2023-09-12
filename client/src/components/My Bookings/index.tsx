import { Box, Heading } from '@chakra-ui/react';
import { useFetchAllTripsQuery } from '../../rtk-store/api/tripApi';
import FlightDetails from '../Flight Details';

const MyBookings = () => {
	const { data: bookedTrips, isError, isLoading } = useFetchAllTripsQuery();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Unknown Error Occurred!</div>;
	}

	return (
		<Box>
			<Heading
				fontSize={'1.25rem'}
				textAlign={'center'}>
				My Bookings
			</Heading>
			{bookedTrips && bookedTrips.length > 0
				? bookedTrips.map((trip: any, index: number) => {
						return (
							<Box
								key={index}
								p={'.5rem'}
								m={'1rem 0'}
								bg={'beige'}
								borderRadius={'lg'}
								boxShadow={'lg'}>
								<FlightDetails
									key={index}
									originStationCode={trip.flightDetails.originStationCode}
									destinationStationCode={trip.flightDetails.destinationStationCode}
									departureDateTime={trip.flightDetails.departureDateTime}
									arrivalDateTime={trip.flightDetails.arrivalDateTime}
									numStops={trip.flightDetails.numStops}
									displayName={trip.flightDetails.displayName}
									logoUrl={trip.flightDetails.logoUrl}
								/>
							</Box>
						);
				  })
				: null}
		</Box>
	);
};

export default MyBookings;
