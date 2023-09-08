import { Box, Button, Center, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';
import FlightDetails from '../../components/Flight Details';

const PaymentInfo = () => {
	const handleCheckout = () => {
		axios
			.post('http://localhost:4000/user/payment/create-checkout-session', {
				test: { price: 1000, quantity: 2 },
			})
			.then((response) => {
				if (response.data.url) {
					window.location.href = response.data.url;
				}
			})
			.catch((err) => console.log(err.message));
	};
	return (
		<>
			<Box
				bg={'beige'}
				p={'.5rem'}>
				<Center>
					<Text
						fontSize={'1.25rem'}
						fontWeight={'600'}>
						Flight details:
					</Text>
				</Center>
				<FlightDetails />

				<Box
					p={'.5rem'}
					mt={'2rem'}
					bg={'inherit'}
					border={'1px solid'}
					borderColor={'ebony'}
					borderRadius={'lg'}
					boxShadow={'lg'}>
					<Center mb={'1rem'}>
						<Text
							fontSize={'1.25rem'}
							fontWeight={'600'}>
							Payment details:
						</Text>
					</Center>
					<Flex
						justifyContent={'space-between'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text>Ticket quantity:</Text>
						<Text>1</Text>
					</Flex>

					<Flex
						justifyContent={'space-between'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text>Ticket fare:</Text>
						<Text>1000 USD</Text>
					</Flex>

					<Flex
						justify={'center'}
						gap={'1rem'}
						p={'.25rem'}
						m={'.25rem 0'}>
						<Text> Total payable:</Text>
						<Text> 1000 USD</Text>
					</Flex>
					<Center>
						<Button
							onClick={handleCheckout}
							bg={'actionSecondary'}
							color={'primary'}
							boxShadow={'md'}>
							Pay Now
						</Button>
					</Center>
				</Box>
			</Box>
		</>
	);
};

export default PaymentInfo;
