import { RequestHandler } from 'express';
import * as dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config({ path: __dirname + '/../.env' });
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
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
		success_url: `${process.env.STRIPE_SUCCESS_URL}`,
		cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
	});
	res.send({ url: session.url, price });
};
