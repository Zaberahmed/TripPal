import { useFetchAllTripsQuery } from '../../rtk-store/api/tripApi';

const MyBookings = () => {
	const { data: bookedTrips, isError, isLoading } = useFetchAllTripsQuery();
	console.log(bookedTrips, isLoading);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>My Bookings</h1>
			{bookedTrips && (
				<ul>
					{bookedTrips.map((trip: any) => (
						<li key={trip.id}>It's working</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default MyBookings;
