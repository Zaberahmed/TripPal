import FlightFilterButtonContainer from '../../components/Flight Filter Button Container';
import FlightInfoCard from '../../components/Flight Full Info';
import TripInfoBox from '../../components/Trip Info Box';

const FlightPage = () => {
	return (
		<>
			<TripInfoBox />
			<FlightFilterButtonContainer />
			<FlightInfoCard></FlightInfoCard>
		</>
	);
};

export default FlightPage;
