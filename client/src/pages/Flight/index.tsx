import FlightFilterButtonContainer from '../../components/Flight Filter Button Container';
import FlightFullInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';

const FlightPage = () => {
	return (
		<>
			<TripInfoBox />
			<FlightFilterButtonContainer />
			<FlightFullInfoCard></FlightFullInfoCard>
		</>
	);
};

export default FlightPage;
