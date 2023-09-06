import { Tabs, TabList, Tab, TabPanels, TabPanel, Center } from '@chakra-ui/react';
import OneWayForm from '../One way Form';
import RoundTripForm from '../Round Trip Form';

const FlightTab = () => {
	return (
		<Tabs
			defaultIndex={1}
			variant="unstyled"
			isFitted>
			<Center>
				<TabList
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
					<p>Multi city</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
};

export default FlightTab;
