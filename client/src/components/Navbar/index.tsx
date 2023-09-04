import { Text, Flex, Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Flex
				height={'3rem'}
				p={'.75rem'}
				justify={'space-between'}
				alignItems={'center'}
				bg={'secondary'}
				color={'primary'}
				boxShadow={'rgba(0, 0, 0, 0.15) 0px 4px 4px;'}
				position={'sticky'}
				// zIndex={100000}
			>
				<IconButton
					bg={'inherit'}
					icon={isOpen ? <CloseIcon boxSize={'1.5rem'} /> : <HamburgerIcon boxSize={'1.5rem'} />}
					boxSize={'1.5rem'}
					onClick={isOpen ? onClose : onOpen}
					aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
					color={'primary'}
				/>
				<Text>Logo</Text>
			</Flex>
			<Box>
				<Outlet />
			</Box>

			<Drawer
				size="menu"
				isOpen={isOpen}
				placement="left"
				onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerBody>
							<Text>Link 1</Text>
							<Text>Link 2</Text>
							<Text>Link 3</Text>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default NavBar;
