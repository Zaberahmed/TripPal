import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Text, DrawerFooter, Badge, Flex, Icon } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { MdAirplaneTicket, MdFlight } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';
import { useSignOutMutation } from '../../rtk-store/api/authApi';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
	const [signOutMutation] = useSignOutMutation();
	const navigate = useNavigate();

	const handleLogoutClick = async () => {
		try {
			const result = await signOutMutation({});
			if (result) {
				localStorage.removeItem('user');
				Cookie.remove('accessToken');
				navigate('/login');
			}
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<Drawer
			size="menu"
			isOpen={isOpen}
			placement="left"
			onClose={onClose}>
			<DrawerOverlay>
				<DrawerContent style={{ top: '3rem' }}>
					<DrawerBody textColor={'ebony'}>
						<Flex
							mt={'4rem'}
							direction={'column'}
							textAlign={'center'}
							gap={'1rem'}>
							<Flex
								justify={'center'}
								bg={'skyblue'}
								borderRadius={'.75rem'}
								p={'.45rem'}
								boxShadow={'lg'}
								fontSize="1.15rem"
								fontWeight="500"
								mb={4}
								gap={'.5rem'}>
								<Icon
									as={CgProfile}
									boxSize="1.5rem"
								/>
								<Text
									fontSize="1.15rem"
									fontWeight="500">
									Profile Info
								</Text>
							</Flex>

							<Flex
								bg={'skyblue'}
								borderRadius={'.75rem'}
								p={'.45rem'}
								boxShadow={'md'}
								fontSize="1.15rem"
								fontWeight="500"
								mb={4}
								justify={'center'}
								align={'center'}
								gap={'.5rem'}>
								<Icon
									as={MdAirplaneTicket}
									boxSize="1.5rem"
								/>
								<Text
									fontSize="1.15rem"
									fontWeight="500">
									My Bookings
								</Text>
							</Flex>

							<Flex
								bg={'skyblue'}
								borderRadius={'.75rem'}
								p={'.45rem'}
								boxShadow={'md'}
								fontSize="1.15rem"
								fontWeight="500"
								mb={4}
								justify={'center'}
								align={'center'}
								gap={'.5rem'}>
								<Icon
									as={MdFlight}
									boxSize="1.5rem"
								/>
								<Text
									whiteSpace={'nowrap'}
									fontSize="1.15rem"
									fontWeight="500">
									Flight Tracker
								</Text>
							</Flex>
						</Flex>
					</DrawerBody>

					<DrawerFooter>
						<Flex
							as={Badge}
							color={'primary'}
							bg={'red.400'}
							borderRadius={'.75rem'}
							p={'.45rem'}
							boxShadow={'md'}
							fontSize="1.25rem"
							fontWeight="600"
							mb={4}
							justify={'center'}
							align={'center'}
							gap={'.5rem'}
							onClick={handleLogoutClick}>
							<Icon
								as={TbLogout2}
								boxSize="1.5rem"
							/>
							<Text
								fontSize="1.25rem"
								fontWeight="600">
								Logout
							</Text>
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</DrawerOverlay>
		</Drawer>
	);
};

export default SideBar;
