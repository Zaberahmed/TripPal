import { Text, Flex, Box, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
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
				boxShadow={'2xl'}
				position={'sticky'}>
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
				isOpen={isOpen}
				placement="left"
				onClose={onClose}>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>Navigation</DrawerHeader>
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
