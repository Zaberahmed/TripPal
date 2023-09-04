import { Text, Flex, Box } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<Flex
				justify={'space-between'}
				alignItems={'center'}
				bg={'secondary'}
				color={'primary'}
				boxShadow={'2xl'}
				position={'sticky'}>
				<Text>Logo</Text>
				<HamburgerIcon boxSize={'1.5rem'} />
			</Flex>
			<Box>
				<Outlet />
			</Box>
		</>
	);
};

export default NavBar;
