import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import itemRoutes from './routes/itemRoutes';
import swapRoutes from './routes/swapRoutes';
import redemptionRoutes from './routes/redemptionRoutes';
import adminRoutes from './routes/adminRoutes';
dotenv.config();
connectDB();
const app = express();
app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('ReWear Backend API is running...');
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/swaps', swapRoutes);
app.use('/api/redemptions', redemptionRoutes);
app.use('/api/admin', adminRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});