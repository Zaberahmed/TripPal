import { Text, Flex, Box, IconButton, useDisclosure, Image } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import SideBar from '../Sidebar';
import bg from './../../assets/background.jpg';
import { useState, useEffect } from 'react';
import Logo from '../logo';
import logo from './../../components/logo/logo.svg';

const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [hasShadow, setHasShadow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setHasShadow(scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Flex
				height={'3rem'}
				p={'.75rem'}
				justify={'space-between'}
				alignItems={'center'}
				bg={'secondary'}
				color={'primary'}
				boxShadow={hasShadow ? 'rgba(0, 0, 0, 0.15) 0 .325rem .325rem' : 'none'}
				position={'sticky'}
				top={0}
				zIndex={10}>
				<IconButton
					bg={'inherit'}
					icon={
						isOpen ? (
							<CloseIcon
								boxSize={'1.25rem'}
								color={'actionSecondary'}
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
				<Flex
					justifyContent={'space-between'}
					alignItems={'center'}>
					<Image
						src={logo}
						alt="logo"
						width="70"
						height="70"
					/>
					<Text
						color={'primary'}
						fontFamily={'Dancing Script'}
						fontSize={'2rem'}
						fontWeight={'700'}>
						Trippal
					</Text>
				</Flex>
			</Flex>
			<Box
				bgImg={bg}
				h={'auto'}
				p={'.25rem'}>
				<Outlet />
			</Box>

			{/* <SideBar
				isOpen={isOpen}
				onClose={onClose}
			/> */}
		</>
	);
};

export default NavBar;
