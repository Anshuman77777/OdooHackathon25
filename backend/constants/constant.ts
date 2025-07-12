import dotenv from 'dotenv';
dotenv.config();
export const PORT: string = process.env.PORT as string;
export const MONGO_URI: string = process.env.MONGO_URI as string;
export const JWT_SECRET: string = process.env.JWT_SECRET as string;