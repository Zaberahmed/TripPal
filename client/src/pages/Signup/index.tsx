import { Box, Center } from '@chakra-ui/react';
import SignupForm from '../../components/Signup Form';
import sky from '../../assets/sky.jpg';

const SignUpPage = () => {
	return (
		<Center
			h="100vh"
			backgroundImage={`url(${sky})`}
			backgroundSize="cover"
			backgroundRepeat={'no-repeat'}>
			<Box
				p={'1rem'}
				m={'auto'}
				maxW="sm"
				w="100%">
				<SignupForm />
			</Box>
		</Center>
	);
};

export default SignUpPage;
