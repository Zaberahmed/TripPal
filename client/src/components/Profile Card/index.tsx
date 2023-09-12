import { Box, Button, Center, Flex, Image, Text, VStack } from '@chakra-ui/react';
import avatar from './../../assets/avatar.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: 'John Doe',
		email: 'john@example.com',
		password: '********',
		phone: '016XXXXXXXX',
		gender: '',
		passport: '',
	});

	useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) {
			const parsedUser = JSON.parse(user);
			setUser(parsedUser);
		}
	}, []);
	return (
		<Box
			h={'100vh'}
			bg={'primary'}
			opacity={0.8}>
			<Flex
				direction={'column'}
				gap={'1rem'}
				justify={'center'}
				align={'center'}>
				<Image
					mt={'1rem'}
					src={avatar}
					boxSize={'5rem'}></Image>
				<Text
					letterSpacing={1}
					color={'ebony'}
					fontSize={'1.5rem'}
					fontWeight={'600'}>
					{user?.name}
				</Text>
			</Flex>
			<Flex
				justify={'space-between'}
				mt={'2rem'}>
				<VStack
					p={'.5rem'}
					spacing={'1rem'}
					align={'flex-start'}
					fontWeight={'500'}
					fontSize={'1.15rem'}>
					<Text>Email</Text>
					<Text>Password</Text>
					<Text>Phone</Text>
					<Text>Gender</Text>
					<Text>Passport</Text>
				</VStack>
				<VStack
					align={'flex-end'}
					p={'.5rem'}
					spacing={'1rem'}
					fontWeight={'500'}
					fontSize={'1.15rem'}>
					<Text>{user.email}</Text>
					<Text>********</Text>
					<Text>{user.phone}</Text>
					<Text>{user.gender}</Text>
					<Text>{user.passport}</Text>
				</VStack>
			</Flex>
			<Center mt={'2rem'}>
				<Button
					onClick={() => navigate('/bookings')}
					bg={'actionSecondary'}
					color={'primary'}
					borderRadius={'.5rem'}
					boxShadow={'lg'}
					fontWeight={'500'}>
					My Bookings
				</Button>
			</Center>
		</Box>
	);
};

export default ProfileCard;
