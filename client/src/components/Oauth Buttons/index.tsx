import { Flex, Button, Icon, Text } from '@chakra-ui/react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';

const OauthButtons = () => {
	return (
		<Flex
			gap={'1rem'}
			justifyContent={'center'}
			alignItems={'center'}>
			<Button
				w={'10rem'}
				bg={'skyblue'}>
				<Flex gap={'.5rem'}>
					<Icon as={BsFacebook} />
					<Text>Facebook</Text>
				</Flex>
			</Button>
			<Button
				w={'10rem'}
				bg={'red.400'}>
				<Flex gap={'.5rem'}>
					<Icon as={BsGoogle} />
					<Text> Google</Text>
				</Flex>
			</Button>
		</Flex>
	);
};

export default OauthButtons;
