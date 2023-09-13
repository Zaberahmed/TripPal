import { Flex, Image, Text } from '@chakra-ui/react';
import greenTick from './../../assets/icons8-tick-box.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Success = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/flight');
		}, 3000);
	}, []);
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			h="60vh">
			<Image
				src={greenTick}
				boxSize={'6rem'}
			/>

			<Text
				mb={'1rem'}
				textAlign={'center'}
				color={'ebony'}
				fontSize={'2rem'}
				fontWeight={'700'}>
				Success!
			</Text>
			<Text
				textAlign={'center'}
				color={'ebony'}
				fontSize={'1.25rem'}
				fontWeight={'600'}>
				You have successfully booked your flight
			</Text>
		</Flex>
	);
};
