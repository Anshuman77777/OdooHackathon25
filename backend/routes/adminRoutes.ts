import express from 'express';
import {
  getPendingItems,
  approveItem,
  rejectItem
} from '../controllers/adminController';
import { protect, adminOnly } from '../middleware/auth';

const router = express.Router();

router.get('/items/pending', protect, adminOnly, getPendingItems);
router.put('/items/:id/approve', protect, adminOnly, approveItem);
router.put('/items/:id/reject', protect, adminOnly, rejectItem);

export default router;
