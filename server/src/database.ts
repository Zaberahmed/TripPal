import mongoose, { Schema, Types, model } from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

try {

	mongoose.connect(`${process.env.DATABASE_URL}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`);
} catch (error) {
	console.log(error);
}

export { Schema, Types, model };
