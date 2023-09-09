import { Flex, Button, Icon, Text } from '@chakra-ui/react';
import { signInWithPopup } from 'firebase/auth';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import auth, { faceBookProvider, googleProvider } from '../../firebase.init';

const OauthButtons = () => {
	const handleGoogleOauth = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		try {
			const result = await signInWithPopup(auth, googleProvider);
			console.log(result);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const handleFaceBookOauth = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		try {
			const result = await signInWithPopup(auth, faceBookProvider);
			console.log(result);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	return (
		<Flex
			gap={'1rem'}
			justifyContent={'center'}
			alignItems={'center'}>
			<Button
				w={'10rem'}
				bg={'green.300'}
				onClick={handleFaceBookOauth}>
				<Flex gap={'.5rem'}>
					<Icon as={BsFacebook} />
					<Text>Facebook</Text>
				</Flex>
			</Button>
			<Button
				w={'10rem'}
				bg={'red.400'}
				onClick={handleGoogleOauth}>
				<Flex gap={'.5rem'}>
					<Icon as={BsGoogle} />
					<Text> Google</Text>
				</Flex>
			</Button>
		</Flex>
	);
};

export default OauthButtons;
