import { Button } from '@chakra-ui/react';
import axios from 'axios';

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
	return <Button onClick={handleCheckout}>Pay Now</Button>;
};

export default PaymentInfo;
