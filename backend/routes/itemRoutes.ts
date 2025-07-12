import express from 'express';
import {
  createItem,
  getAllItems,
  getItemById,
  getMyItems,
} from '../controllers/itemController';
import { protect } from '../middleware/auth';
import upload from '../middleware/upload';

const router = express.Router();

router.get('/', getAllItems);
router.get('/my', protect, getMyItems);
router.get('/:id', getItemById);

// Upload up to 5 images under the field name "images"
router.post('/', upload.array('images', 5), createItem);

export default router;
