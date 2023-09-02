import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

export const corsConfig = {
	origin: [`${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`],
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};
