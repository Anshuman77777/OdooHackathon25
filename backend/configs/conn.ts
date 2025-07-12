import { MONGO_URI } from '../constants/constant';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', (err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
