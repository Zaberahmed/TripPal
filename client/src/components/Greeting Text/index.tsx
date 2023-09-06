import { Flex, Icon, Box, Text } from '@chakra-ui/react';
import { FaPlaneDeparture } from 'react-icons/fa';
import HeadingText from '../Heading';

const GreetingText = () => {
	return (
		<Box
			p={'.5rem'}
			mt={'1rem'}>
			<Flex
				alignItems={'center'}
				gap={'.5rem'}>
				<HeadingText text={'Hello'}></HeadingText>
				<Text
					fontWeight={'700'}
					fontSize={'1.65rem'}
					as="span"
					color={'actionPrimary'}>
					Zaber
				</Text>
			</Flex>
			<Flex
				alignItems={'center'}
				gap={'1rem'}>
				<Text
					fontWeight={'600'}
					fontSize={'1.25rem'}>
					Where are you off to <span style={{ color: '#064CE2', fontSize: '1.5rem', fontWeight: '600' }}>Next?</span>
				</Text>
				<Icon
					as={FaPlaneDeparture}
					boxSize={'1.65rem'}
					fill={'secondary'}
					color={'secondary'}
				/>
			</Flex>
		</Box>
	);
};

export default GreetingText;
