import { Box, Heading } from '@chakra-ui/react';
import { useFetchAllTripsQuery } from '../../rtk-store/api/tripApi';
import BookingTab from '../Bookings Tab';
import { useEffect, useState } from 'react';
import { Trip } from '../../interfaces/trip.interface';

const MyBookings = () => {
	const { data: bookedTrips, isError, isLoading } = useFetchAllTripsQuery();
	const [sortedTrips, setSortedTrips] = useState<Trip[]>([]);

	// const compareDepartureDateTime = (a: any, b: any) => {
	// 	const dateTimeA = new Date(a.flightDetails.departureDateTime).getTime();
	// 	const dateTimeB = new Date(b.flightDetails.departureDateTime).getTime();
	// 	return dateTimeA - dateTimeB;
	// };

	useEffect(() => {
		const sortedTrips = bookedTrips?.slice().sort((a: any, b: any) => {
			const earliestDepartureA = Math.min(...a.flightDetails.map((flight: any) => new Date(flight.departureDateTime).getTime()));
			const earliestDepartureB = Math.min(...b.flightDetails.map((flight: any) => new Date(flight.departureDateTime).getTime()));

			return earliestDepartureA - earliestDepartureB;
		});

		setSortedTrips(sortedTrips);
	}, [bookedTrips]);

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

			<BookingTab trips={sortedTrips} />
		</Box>
	);
};

export default MyBookings;
