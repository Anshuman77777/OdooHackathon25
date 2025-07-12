import express from 'express';
import { requestSwap, updateSwapStatus, getMySwaps } from '../controllers/swapController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').post(protect, requestSwap);
router.route('/myswaps').get(protect, getMySwaps);
router.route('/:id/status').put(protect, updateSwapStatus);

export default router;