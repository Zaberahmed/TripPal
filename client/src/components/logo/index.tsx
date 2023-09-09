import { Flex, Image, Text } from '@chakra-ui/react';
import logo from './logo.svg';

const Logo = () => {
	return (
		<Flex
			justifyContent={'space-between'}
			alignItems={'center'}>
			<Image
				src={logo}
				alt="logo"
				width="90"
				height="90"
			/>
			<Text
				color={'secondary'}
				fontFamily={'Dancing Script'}
				fontSize={'2.5rem'}
				fontWeight={'700'}>
				Trippal
			</Text>
		</Flex>
	);
};

export default Logo;
