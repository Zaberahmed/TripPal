import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FlightFilterButtonContainer from '../../components/Flight Filter Button Container';
import FlightFullInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';

const FlightPage = () => {
	const location = useLocation();
	const tripType = location.state.tripType;
	useEffect(() => {
		const flightsString = localStorage.getItem('oneWayFlights');
		const flightSearchList: any = [];

		if (flightsString) {
			const flights = JSON.parse(flightsString);

			if (flights) {
				const flightSegments = flights.map((flight: any) => flight.segments);
				const legs = flightSegments.map((segment: any) => segment[0].legs);

				legs.forEach((leg: any) => {
					leg.forEach((legInfo: any) => {
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

						flightSearchList.push({
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
						});
					});
				});

				const purchaseLinks = flights.map((flight: any) => flight.purchaseLinks);

				purchaseLinks.forEach((links: any) => {
					links.forEach((purchaseLink: any) => {
						const currency = purchaseLink.currency;
						const totalPrice = purchaseLink.totalPrice;

						flightSearchList[flightSearchList.length - 1] = {
							...flightSearchList[flightSearchList.length - 1],
							currency,
							totalPrice,
						};
					});
				});
			}
		}
		const oneWayFlightCleanData = {
			tripType,
			flightSearchList,
		};

		localStorage.setItem('oneWayFlightCleanData', JSON.stringify(oneWayFlightCleanData));
	}, [tripType]);

	return (
		<>
			<TripInfoBox />
			<FlightFilterButtonContainer />
			<FlightFullInfoCard></FlightFullInfoCard>
		</>
	);
};

export default FlightPage;
