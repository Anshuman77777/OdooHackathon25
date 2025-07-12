import express from 'express';
import {
  requestSwap,
  getMySwaps,
  updateSwapStatus
} from '../controllers/swapController';
import { protect } from '../middleware/auth';

const router = express.Router();

router.get('/', protect, getMySwaps);
router.post('/', protect, requestSwap);
router.put('/:id/status', protect, updateSwapStatus);

export default router;
