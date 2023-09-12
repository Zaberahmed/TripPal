import { Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import error404 from './../../assets/error404.svg';

const Error = ({ onClose }: { onClose: () => void }) => {
	const handleClose = () => {
		onClose();
	};
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
			<Button
				onClick={handleClose}
				bg={'red.400'}>
				Close
			</Button>
		</Flex>
	);
};

export default Error;
