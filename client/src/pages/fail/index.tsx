import { Flex, Image, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import redCross from './../../assets/icons8-cross-mark-48.png';

const Fail = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 3000);
	}, []);
	return (
		<Flex
			direction="column"
			justify="center"
			align="center"
			h="60vh">
			<Image
				src={redCross}
				boxSize={'6rem'}
			/>

			<Text
				mb={'1rem'}
				textAlign={'center'}
				color={'ebony'}
				fontSize={'2rem'}
				fontWeight={'700'}>
				Failed!
			</Text>
			<Text
				textAlign={'center'}
				color={'ebony'}
				fontSize={'1.25rem'}
				fontWeight={'600'}>
				Unable to book flight due to unknown error
			</Text>
		</Flex>
	);
};

export default Fail;
