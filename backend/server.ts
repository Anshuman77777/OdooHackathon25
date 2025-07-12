import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import connectDB from './configs/conn';
import authRoutes from './routes/authRoutes';
import itemRoutes from './routes/itemRoutes';
import userRoutes from './routes/userRoutes';
import swapRoutes from './routes/swapRoutes';
import redemptionRoutes from './routes/redemptionRoutes';
import adminRoutes from './routes/adminRoutes';

dotenv.config();
const app: Application = express();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log('Server Running');
  res.send('Hello from ReWear!');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/users', userRoutes);
app.use('/api/swaps', swapRoutes);
app.use('/api/redeem', redemptionRoutes);
app.use('/api/admin', adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
