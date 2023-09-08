import { Center, Flex, Heading, Text, Image } from '@chakra-ui/react';
import error404 from './../../assets/error404.svg';

const Error = () => {
	return (
		<Center mt={'8rem'}>
			<Flex
				direction={'column'}
				alignItems={'center'}
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
					fontFamily={'Dancing Script'}
					fontWeight={'700'}
					fontSize={'3rem'}>
					Something went wrong!
				</Text>
			</Flex>
		</Center>
	);
};

export default Error;
