import { Box, Center, Image } from '@chakra-ui/react';
import LoginForm from '../../components/Login Form';
import loginWaveUpper from '../../assets/loginWaveUpper.svg';
import loginWaveLower from '../../assets/loginWaveLower.svg';
import sky from '../../assets/sky.jpg';
const LoginPage = () => {
	return (
		<Center
			h="100vh"
			position="relative"
			backgroundImage={`url(${sky})`}
			backgroundSize="cover"
			backgroundRepeat={'no-repeat'}>
			<Box
				p={'1rem'}
				m={'auto'}
				maxW="sm"
				w="100%">
				{/* <Image
			position="absolute"
			top="0"
					left="0"

			width="100%"
			src={loginWaveUpper}
			alt="Upper Wave"
		  /> */}
				<LoginForm />
				{/* <Image
					position="absolute"

			bottom="0"
			left="0"
			width="100%"
			src={loginWaveLower}
			alt="Lower Wave"
		  /> */}
			</Box>
		</Center>
	);
};

export default LoginPage;
