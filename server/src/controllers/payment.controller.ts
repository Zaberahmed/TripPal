import { RequestHandler } from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51No4fxCFvEFo4mlsj4z9S60B0hMFivytq9Iielym7BgSroIUtAKrvqNbEra2aa4tVpoMPjBPsfdiBA6mETj72toO00OEYPPkiA', {
	apiVersion: '2023-08-16',
});

export const pay: RequestHandler = async (req, res) => {
	const { test } = req.body;
	const { price, quantity } = test;
	const unitAmount = Math.round(price * 100);
	const session = await stripe.checkout.sessions.create({
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'Booking',
					},
					unit_amount: unitAmount,
				},
				quantity: quantity,
			},
		],

		mode: 'payment',
		success_url: `http://localhost:5173/home`,
		cancel_url: `http://localhost:5173/flight`,
	});
	res.send({ url: session.url, price });
};
