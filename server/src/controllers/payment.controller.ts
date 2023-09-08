import { RequestHandler } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51No4fxCFvEFo4mlsj4z9S60B0hMFivytq9Iielym7BgSroIUtAKrvqNbEra2aa4tVpoMPjBPsfdiBA6mETj72toO00OEYPPkiA', {
	apiVersion: '2023-08-16',
});

export const pay: RequestHandler = async (req, res) => {
	const { test } = req.body;

	// const line_items = req.body.cartItems?.map((item: any) => {
	// 	return {
	// 		price_data: {
	// 			currency: 'usd',
	// 			product_data: {
	// 				name: item?.productInfo?.productName,
	// 				metadata: {
	// 					productId: item?.productInfo?._id,
	// 				},
	// 			},
	// 			unit_amount: item?.productInfo?.basePrice,
	// 		},
	// 		quantity: 1,
	// 	};
	// });
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'test',
					},
					unit_amount: 1000,
				},
				quantity: 1,
			},
		],

		mode: 'payment',
		success_url: `http://localhost:5173/success`,
		cancel_url: `http://localhost:5173/fail`,
	});
	res.send({ url: session.url });
};
