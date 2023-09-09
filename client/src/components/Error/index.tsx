import { Flex, Heading, Text, Image } from '@chakra-ui/react';
import error404 from './../../assets/error404.svg';

const Error = () => {
	return (
		<Flex
			bg={'beige'}
			h={'70vh'}
			direction={'column'}
			alignItems={'center'}
			justify={'center'}
			gap={'1rem'}>
			<Heading
				fontFamily={'Dancing Script'}
				fontWeight={'700'}
				fontSize={'3rem'}>
				Error
			</Heading>
			<Image
				src={error404}
				boxSize={'12rem'}></Image>
			<Text
				textAlign={'center'}
				fontFamily={'Dancing Script'}
				fontWeight={'700'}
				fontSize={'3rem'}>
				Something went wrong!
			</Text>
		</Flex>
	);
};

export default Error;
