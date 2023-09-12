import React from 'react';
import { Button, Center, Flex, Heading, Text, VStack, Image, Box } from '@chakra-ui/react';
import flight from './flight.svg';
import logo from './logo.svg';
import ExistingUser from '../Existing User';
import sky from './../../assets/sky.jpg';
import { useNavigate } from 'react-router-dom';

const GetStarted: React.FC = () => {
	const navigate = useNavigate();
	return (
		<Box backgroundImage={`url(${sky})`}>
			<Center
				overflowY="auto"
				color={'#0E1420'}
				p={'1rem'}>
				<VStack
					spacing={6}
					boxSizing="border-box">
					<Flex
						justifyContent={'space-between'}
						alignItems={'center'}>
						<Image
							src={logo}
							alt="logo"
							width="90"
							height="90"
						/>
						<Text
							color={'secondary'}
							fontFamily={'Dancing Script'}
							fontSize={'2.5rem'}
							fontWeight={'700'}>
							Trippal
						</Text>
					</Flex>

					<Heading
						as="h1"
						size="xl"
						fontWeight={'700'}
						textAlign={'center'}>
						A World Of Flights At Your Fingertips
					</Heading>

					<Image
						src={flight}
						alt="flight"
						width="300"
						height="300"
					/>

					<Text
						fontSize="1.25rem"
						fontWeight={'700'}>
						Explore the world, find the best flights, and plan your dream vacation with ease.
					</Text>

					<Button
						onClick={() => navigate('/signup')}
						w={'10rem'}
						bg={'actionPrimary'}
						color={'primary'}
						borderRadius={'1rem'}
						boxShadow={'lg'}>
						Join
					</Button>

					<ExistingUser />
				</VStack>
			</Center>
		</Box>
	);
};

export default GetStarted;
