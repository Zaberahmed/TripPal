import { Text, Flex, Box, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar';
import bg from './../../assets/background.jpg';

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
				position={'sticky'}>
				<IconButton
					bg={'inherit'}
					icon={
						isOpen ? (
							<CloseIcon
								boxSize={'1.25rem'}
								color={'tertiary'}
							/>
						) : (
							<HamburgerIcon
								boxSize={'1.5rem'}
								color={'primary'}
							/>
						)
					}
					boxSize={'1.5rem'}
					onClick={isOpen ? onClose : onOpen}
					aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
					color={'primary'}
					transition="transform 0.3s ease-in-out, opacity 0.4s ease-in-out"
					transform={isOpen ? 'rotate(90deg)' : 'rotate(0)'}
				/>
				<Text>Logo</Text>
			</Flex>
			<Box
				bgImg={bg}
				h={'auto'}
				p={'.25rem'}>
				<Outlet />
			</Box>

			<SideBar
				isOpen={isOpen}
				onClose={onClose}
			/>
		</>
	);
};

export default NavBar;
