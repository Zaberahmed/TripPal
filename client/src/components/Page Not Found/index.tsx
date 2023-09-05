import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import pageNotFound from './../../assets/page-not-found.svg';

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
					src={pageNotFound}
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
