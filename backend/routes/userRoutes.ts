import express from 'express';
import { getProfile, getAllUsers } from '../controllers/userController';
import { protect } from '../middleware/auth';

const router = express.Router();

router.get('/me', protect, getProfile);
router.get('/', protect, getAllUsers); // Optional for admin use only

export default router;
