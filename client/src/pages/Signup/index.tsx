import { Box, Center } from '@chakra-ui/react';
import SignupForm from '../../components/Signup Form';

const SignUpPage = () => {
	return (
		<Center h="100vh">
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
