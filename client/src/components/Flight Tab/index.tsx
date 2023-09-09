import { Tabs, TabList, Tab, TabPanels, TabPanel, Center, Text } from '@chakra-ui/react';
import OneWayForm from '../One way Form';
import RoundTripForm from '../Round Trip Form';
import MultiCityForm from '../Multi City  Form';

const FlightTab = () => {
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
			<Center
				mt={'.75rem'}
				p={'.5rem'}>
				<Text
					fontSize={'1.5rem'}
					fontWeight={'600'}>
					Search Flights
				</Text>
			</Center>

			<Center>
				<TabList
					m={'.75rem 0'}
					boxShadow="0px .25rem .25rem rgba(0, 0, 0, 0.15)"
					whiteSpace={'nowrap'}
					borderRadius={'1.25rem'}
					fontSize={'1rem'}
					fontWeight={'500'}>
					<Tab _selected={{ color: 'white', bg: 'actionPrimary', borderRadius: '1.25rem 0 0 1.25rem' }}>One way</Tab>
					<Tab _selected={{ color: 'white', bg: 'actionPrimary' }}>Round trip</Tab>
					<Tab _selected={{ color: 'white', bg: 'actionPrimary', borderRadius: '0 1.25rem 1.25rem 0' }}>Multi city</Tab>
				</TabList>
			</Center>
			<TabPanels>
				<TabPanel>
					<OneWayForm />
				</TabPanel>
				<TabPanel>
					<RoundTripForm />
				</TabPanel>
				<TabPanel>
					<MultiCityForm />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default FlightTab;
