import { Tabs, TabList, Tab, TabPanels, TabPanel, Icon } from '@chakra-ui/react';
import { FaHotel, FaPlane } from 'react-icons/fa';
import { GiPalmTree } from 'react-icons/gi';
import FlightTab from '../Flight Tab';
import HotelBookingForm from '../Hotel Booking Form';

const MainTab = () => {
	return (
		<Tabs
			bg={'#ffffff'}
			isFitted
			variant="enclosed"
			borderRadius="lg"
			boxShadow={'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'}
			m="1rem"
			w={'22rem'}
			maxW="55rem"
			mx="auto">
			<TabList
				mb="1rem"
				fontSize={'1rem'}
				fontWeight={'500'}>
				<Tab
					gap={'1rem'}
					_selected={{ color: 'actionPrimary' }}>
					<Icon as={FaPlane} />
					Flight
				</Tab>
				<Tab
					gap={'1rem'}
					_selected={{ color: 'actionPrimary' }}>
					<Icon as={FaHotel} />
					Hotel
				</Tab>
				{/* <Tab
					gap={'1rem'}
					_selected={{ color: 'actionPrimary' }}>
					<Icon as={GiPalmTree} />
					Holiday
				</Tab> */}
			</TabList>
			<TabPanels>
				<TabPanel>
					<FlightTab />
				</TabPanel>
				<TabPanel>
					<HotelBookingForm />
				</TabPanel>
				{/* <TabPanel>
					<p>Holiday</p>
				</TabPanel> */}
			</TabPanels>
		</Tabs>
	);
};

export default MainTab;
