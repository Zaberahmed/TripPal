import { Flex, Divider, Text } from '@chakra-ui/react';

const OrDivider = () => {
	return (
		<Flex
			fontWeight={'500'}
			alignItems={'center'}
			gap={'1rem'}
			m={'.75rem'}>
			<Divider
				border={'1px solid gray.300'}
				my={'1rem'}
			/>
			<Text>OR</Text>
			<Divider
				border={'1px solid gray.300'}
				my={'1rem'}
			/>
		</Flex>
	);
};

export default OrDivider;
