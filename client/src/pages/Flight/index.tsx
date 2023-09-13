import { useEffect, useState } from 'react';
import FlightFullInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';
import FlightFilterButton from '../../components/Flight Filter Button';
import { Center, Flex } from '@chakra-ui/react';

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
				flights.forEach((flight: any) => {
					const segments = flight.segments;
					const purchaseLinks = flight.purchaseLinks;

					const purchaseLink = purchaseLinks[0];

					// const legs = segments[0].legs;
					segments.forEach((segment: any) => {
						const legs = segment.legs;

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

							const newFlightDetails = {
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

							setFlightSearchList((prev: any[]) => [...prev, newFlightDetails]);
						});
					});
				});
			}
		}
	}, []);

	// useEffect(() => {
	// 	console.log(flightSearchList);
	// 	console.log(filteredFlights);
	// }, [flightSearchList]);

	useEffect(() => {
		const flightCleanData = {
			flightSearchList,
		};
		localStorage.setItem('flightCleanData', JSON.stringify(flightCleanData));
	}, [flightSearchList]);

	useEffect(() => {
		setFilteredFlights(flightSearchList);
	}, [flightSearchList]);

	const filterFlights = (filterType: any) => {
		let filteredList = [...flightSearchList];

		if (filterType === 'Earliest Flights') {
			filteredList.sort((a: any, b: any) => {
				const dateA = new Date(a.departureDateTime);
				const dateB = new Date(b.departureDateTime);

				return dateA.getTime() - dateB.getTime();
			});
		} else if (filterType === 'Cheapest Flights') {
			filteredList.sort((a, b) => a.totalPrice - b.totalPrice);
		} else if (filterType === 'Fastest Flights') {
			filteredList.sort((a: any, b: any) => {
				const durationA = new Date(a.arrivalDateTime).getTime() - new Date(a.departureDateTime).getTime();
				const durationB = new Date(b.arrivalDateTime).getTime() - new Date(b.departureDateTime).getTime();
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
				filteredFlights.map((flight: any, index: number) => (
					<FlightFullInfoCard
						key={index}
						originStationCode={flight.originStationCode}
						destinationStationCode={flight.destinationStationCode}
						departureDateTime={flight.departureDateTime}
						arrivalDateTime={flight.arrivalDateTime}
						classOfService={flight.classOfService}
						flightNumber={flight.flightNumber}
						numStops={flight.numStops}
						distanceInKM={flight.distanceInKM}
						logoUrl={flight.logoUrl}
						displayName={flight.displayName}
						currency={flight.currency}
						totalPrice={flight.totalPrice}
					/>
				))}
		</>
	);
};

export default FlightPage;
