import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import error404 from './../../assets/error404.svg';

const PageNotFound = () => {
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
					Page Not Found
				</Text>
			</Flex>
		</Center>
	);
};

export default PageNotFound;
