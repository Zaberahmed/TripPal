import express, { Application } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { router } from './routers/router';
import { corsConfig } from './cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const app: Application = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(cookieParser());
app.use(router);

try {
	mongoose.connection.on('open', () => console.log('🍁 Connected to Database'));

	app.listen(process.env.SERVER_PORT, () => console.log(`🚀 Server is listening on ${process.env.SERVER_URL}:${process.env.SERVER_PORT}`));
} catch (error) {
	console.error('Could not connect to server!');
}
