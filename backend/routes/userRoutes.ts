import express from 'express';
import { getProfile, getAllUsers } from '../controllers/userController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/profile').get(protect, getProfile);
router.route('/').get(protect, admin, getAllUsers);

export default router;