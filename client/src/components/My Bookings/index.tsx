import { Box, Heading } from '@chakra-ui/react';
import { useFetchAllTripsQuery } from '../../rtk-store/api/tripApi';
import FlightDetails from '../Flight Details';

const MyBookings = () => {
	const { data: bookedTrips, isError, isLoading } = useFetchAllTripsQuery();

	const compareDepartureDateTime = (a: any, b: any) => {
		const dateTimeA = new Date(a.flightDetails.departureDateTime).getTime();
		const dateTimeB = new Date(b.flightDetails.departureDateTime).getTime();
		return dateTimeA - dateTimeB;
	};

	const sortedTrips = bookedTrips.slice().sort(compareDepartureDateTime);

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
			{sortedTrips && sortedTrips.length > 0
				? sortedTrips.map((trip: any, index: number) => {
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
