import { useEffect, useState } from 'react';
import FlightsFullInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';
import FlightFilterButton from '../../components/Flight Filter Button';
import { Box, Center, Flex } from '@chakra-ui/react';

const FlightPage = () => {
	const [flightSearchList, setFlightSearchList] = useState<any[]>([]);
	const [filteredFlights, setFilteredFlights] = useState<any[]>([]);

	useEffect(() => {
		const tripType = localStorage.getItem('tripType');
		let parsedTripType;
		if (tripType) parsedTripType = JSON.parse(tripType);
		let flightString;
		if (parsedTripType === 'ONE_WAY') {
			flightString = localStorage.getItem('oneWayFlights');
		} else if (parsedTripType === 'ROUND_TRIP') {
			flightString = localStorage.getItem('roundTripFlights');
		} else if (parsedTripType === 'MULTI_CITY') {
			flightString = localStorage.getItem('multiCityFlights');
		}
		if (flightString) {
			const flights = JSON.parse(flightString);

			if (flights) {
				flights.forEach((trip: any) => {
					const tripFlights: any[] = [];
					const purchaseLinks = trip.purchaseLinks;

					const purchaseLink = purchaseLinks[0];

					trip.segments.forEach((segment: any) => {
						const legs = segment.legs;
						const flightLegs: any[] = [];

						legs.forEach((legInfo: any) => {
							const originStationCode = legInfo.originStationCode;
							const destinationStationCode = legInfo.destinationStationCode;
							const departureDateTime = legInfo.departureDateTime;
							const arrivalDateTime = legInfo.arrivalDateTime;

							const classOfService = legInfo.classOfService;
							const flightNumber = legInfo.flightNumber;
							const numStops = legInfo.numStops;
							const distanceInKM = legInfo.distanceInKM;

							const operatingCarrier = legInfo.operatingCarrier;
							const logoUrl = operatingCarrier.logoUrl;
							const displayName = operatingCarrier.displayName;

							const newLegDetails = {
								originStationCode,
								destinationStationCode,
								departureDateTime,
								arrivalDateTime,
								classOfService,
								flightNumber,
								numStops,
								distanceInKM,
								logoUrl,
								displayName,
								currency: purchaseLink.currency,
								totalPrice: purchaseLink.totalPrice,
							};

							flightLegs.push(newLegDetails);
						});

						tripFlights.push(flightLegs);
					});

					setFlightSearchList((prev: any[]) => [...prev, tripFlights]);
				});
			}
		}
	}, []);

	useEffect(() => {
		const flightCleanData = {
			flightSearchList,
		};
		localStorage.setItem('flightCleanData', JSON.stringify(flightCleanData));
		setFilteredFlights(flightSearchList);
	}, [flightSearchList]);

	//filtering logic
	const filterFlights = (filterType: any) => {
		let filteredList = [...flightSearchList];

		if (filterType === 'Earliest Flights') {
			filteredList.sort((a: any[], b: any[]) => {
				const dateA = new Date(a[0][0].departureDateTime);
				const dateB = new Date(b[0][0].departureDateTime);

				return dateA.getTime() - dateB.getTime();
			});
		} else if (filterType === 'Cheapest Flights') {
			filteredList.sort((a, b) => {
				const totalPriceA = a.reduce((price: number, flight: any) => price + flight.totalPrice, 0);
				const totalPriceB = b.reduce((price: number, flight: any) => price + flight.totalPrice, 0);
				return totalPriceA - totalPriceB;
			});
		} else if (filterType === 'Fastest Flights') {
			filteredList.sort((a: any[], b: any[]) => {
				const durationA = new Date(a[0][0].arrivalDateTime).getTime() - new Date(a[0][0].departureDateTime).getTime();
				const durationB = new Date(b[0][0].arrivalDateTime).getTime() - new Date(b[0][0].departureDateTime).getTime();
				return durationA - durationB;
			});
		}

		setFilteredFlights(filteredList);
	};

	return (
		<>
			<TripInfoBox />
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
			{filteredFlights &&
				filteredFlights.map((trips: any, index: number) => (
					<Box key={index}>
						{trips.map((flights: any, index: number) => (
							<FlightsFullInfoCard
								key={index}
								flights={flights}
								totalPrice={trips.totalPrice}
							/>
						))}
					</Box>
				))}
		</>
	);
};

export default FlightPage;
