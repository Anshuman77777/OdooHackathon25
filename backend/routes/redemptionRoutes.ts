import express from 'express';
import {redeemItem,getMyRedemptions} from '../controllers/redemptionController'
import { protect } from '../middleware/auth';

const router = express.Router();

router.post('/', protect, redeemItem);
router.get('/', protect, getMyRedemptions);

export default router;
