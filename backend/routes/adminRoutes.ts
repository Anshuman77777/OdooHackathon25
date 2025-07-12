import express from 'express';
import { getPendingItems, approveItem, rejectItem } from '../controllers/adminController';
import { protect, admin } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/items/pending').get(protect, admin, getPendingItems);
router.route('/items/:id/approve').put(protect, admin, approveItem);
router.route('/items/:id/reject').put(protect, admin, rejectItem);

export default router;