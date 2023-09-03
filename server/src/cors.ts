import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

export const corsConfig = {
	origin: [`${process.env.FRONTEND_URL}:${process.env.FRONTEND_PORT}`],
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};
