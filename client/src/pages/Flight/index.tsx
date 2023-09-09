import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FlightFilterButtonContainer from '../../components/Flight Filter Button Container';
import FlightFullInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';

const FlightPage = () => {
	const location = useLocation();
	const tripType = location.state.tripType;
	const [flightSearchList, setFlightSearchList] = useState<any[]>([]);

	useEffect(() => {
		const flightsString = localStorage.getItem('oneWayFlights');

		if (flightsString) {
			const flights = JSON.parse(flightsString);

			if (flights) {
				flights.forEach((flight: any) => {
					const segments = flight.segments;
					const purchaseLinks = flight.purchaseLinks;

					const purchaseLink = purchaseLinks[0];

					const legs = segments[0].legs;

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
			}
		}

		const oneWayFlightCleanData = {
			tripType,
			flightSearchList,
		};
		if (!localStorage.getItem('oneWayFlightCleanData')) localStorage.setItem('oneWayFlightCleanData', JSON.stringify(oneWayFlightCleanData));
	}, []);

	useEffect(() => {
		console.log(flightSearchList);
	}, [flightSearchList]);
	return (
		<>
			<TripInfoBox />
			<FlightFilterButtonContainer />

			{flightSearchList.map((flight: any, index: number) => (
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
