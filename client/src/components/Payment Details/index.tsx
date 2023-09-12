import { Box, Text, Flex, Center, Button } from '@chakra-ui/react';

const PaymentDetails = ({ quantity, totalPrice, currency, handleCheckout }: { quantity: number; totalPrice: number; currency: string; handleCheckout: () => void }) => {
	return (
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
				<Text>{quantity}</Text>
			</Flex>

			<Flex
				justifyContent={'space-between'}
				p={'.25rem'}
				m={'.25rem 0'}>
				<Text>Ticket fare:</Text>
				<Text>
					{totalPrice} {currency}
				</Text>
			</Flex>

			<Flex
				justifyContent={'center'}
				gap={'1rem'}
				p={'.25rem'}
				m={'.25rem 0'}>
				<Text> Total payable:</Text>
				<Text>
					{totalPrice * quantity} {currency}
				</Text>
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
	);
};

export default PaymentDetails;
