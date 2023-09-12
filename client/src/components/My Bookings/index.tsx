import { Box, Heading } from '@chakra-ui/react';
import { useFetchAllTripsQuery } from '../../rtk-store/api/tripApi';
import BookingTab from '../Bookings Tab';
import { useEffect, useState } from 'react';

const MyBookings = () => {
	const { data: bookedTrips, isError, isLoading } = useFetchAllTripsQuery();

	useEffect(() => {
		const sortedTrips = bookedTrips?.slice()?.sort(compareDepartureDateTime);
		setSortedTrips(sortedTrips);
	}, [bookedTrips]);
	const [sortedTrips, setSortedTrips] = useState([]);

	const compareDepartureDateTime = (a: any, b: any) => {
		const dateTimeA = new Date(a.flightDetails.departureDateTime).getTime();
		const dateTimeB = new Date(b.flightDetails.departureDateTime).getTime();
		return dateTimeA - dateTimeB;
	};

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
