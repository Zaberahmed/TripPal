import { Flex, VStack, Text, Button } from '@chakra-ui/react';

type BookNowCard = {
	totalPrice: number;
	currency: string;
	handleClick: () => void;
};

const BookNowCard = ({ totalPrice, currency, handleClick }: BookNowCard) => {
	return (
		<Flex
			p={'.5rem'}
			mt={'1rem'}
			justifyContent={'space-between'}
			alignItems={'center'}
			gap={'2rem'}>
			<VStack>
				<Text
					textAlign={'center'}
					fontSize={'1.5rem'}
					fontWeight={'600'}
					color={'actionPrimary'}>
					{totalPrice} {currency}
				</Text>
				<Text
					textAlign={'center'}
					fontSize={'.625rem'}
					fontWeight={'500'}>
					(per person)
				</Text>
			</VStack>

			<Button
				onClick={handleClick}
				bg={'actionSecondary'}
				borderRadius={'md'}
				boxShadow={'md'}
				color={'primary'}>
				Book Now
			</Button>
		</Flex>
	);
};

export default BookNowCard;
