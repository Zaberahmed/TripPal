import { Flex, Icon, Box, Text } from '@chakra-ui/react';
import { FaPlaneDeparture } from 'react-icons/fa';
import HeadingText from '../Heading';
import { useEffect, useState } from 'react';

const GreetingText = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		phone: '',
	});

	function capitalizeName(name: any) {
		return name.toLowerCase().replace(/(^|\s)\S/g, (firstLetter: string) => firstLetter.toUpperCase());
	}

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) {
			const parsedUser = JSON.parse(user);
			setUser(parsedUser);
		}
	}, []);
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
					{capitalizeName(user?.name)}
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
