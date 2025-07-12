import express from 'express';
import { redeemItem, getMyRedemptions } from '../controllers/redemptionController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').post(protect, redeemItem);
router.route('/myredemptions').get(protect, getMyRedemptions);

export default router;