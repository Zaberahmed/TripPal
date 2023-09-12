import { Tabs, Center, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/react';
import { Trip } from '../../interfaces/trip.interface';
import { useState, useEffect } from 'react';
import FlightDetails from '../Flight Details';

const BookingTab = (props: { trips: Trip[] }) => {
	const [pastTrips, setPastTrips] = useState<Trip[]>([]);
	const [futureTrips, setFutureTrips] = useState<Trip[]>([]);

	useEffect(() => {
		if (props.trips) {
			const currentDate = new Date();

			const past: Trip[] = [];
			const future: Trip[] = [];

			props.trips.forEach((trip) => {
				const departureDate = new Date(trip.flightDetails?.departureDateTime || '');
				if (departureDate && departureDate < currentDate) {
					past.push(trip);
				} else {
					future.push(trip);
				}
			});

			setPastTrips(past);
			setFutureTrips(future);
		}
	}, [props.trips]);
	return (
		<Tabs
			bg={'#ffffff'}
			defaultIndex={1}
			variant="unstyled"
			isFitted
			borderRadius="1rem"
			boxShadow={' rgba(0, 0, 0, 0.35) 0 .313rem .938rem'}
			m={'1rem'}
			w={'22rem'}
			maxW="55rem"
			mx="auto">
			<Center>
				<TabList
					m={'.75rem 0'}
					boxShadow="0px .25rem .25rem rgba(0, 0, 0, 0.15)"
					whiteSpace={'nowrap'}
					borderRadius={'1.25rem'}
					fontSize={'1rem'}
					fontWeight={'500'}>
					<Tab _selected={{ color: 'white', bg: 'actionPrimary', borderRadius: '1.25rem 0 0 1.25rem' }}>Previous</Tab>
					<Tab _selected={{ color: 'white', bg: 'actionPrimary', borderRadius: '0 1.25rem 1.25rem 0' }}>Upcoming</Tab>
				</TabList>
			</Center>
			<TabPanels>
				<TabPanel>
					{pastTrips && pastTrips.length > 0
						? pastTrips.map((trip: any, index: number) => {
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
				</TabPanel>
				<TabPanel>
					{futureTrips && futureTrips.length > 0
						? futureTrips.map((trip: any, index: number) => {
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
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default BookingTab;
