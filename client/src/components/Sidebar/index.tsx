import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerFooter, Text } from '@chakra-ui/react';

const SideBar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	return (
		<Drawer
			size="menu"
			isOpen={isOpen}
			placement="left"
			onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent style={{ top: '3rem' }}>
					<DrawerBody>
						<Text>Flight</Text>
						<Text>Hotel</Text>
						<Text>Holiday</Text>
						<Text>Visa</Text>
						<Text>News & Media</Text>
						<Text>Promotions</Text>
					</DrawerBody>
					<DrawerBody>
						<Text>Profile</Text>
						<Text>My Bookings</Text>
						<Text>Logout</Text>
					</DrawerBody>
					<DrawerFooter>
						<Text>Spin to win</Text>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default SideBar;
