import express from 'express';
import { createItem, getAllItems, getItemById, getMyItems } from '../controllers/itemController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').post(protect, createItem).get(getAllItems);
router.route('/myitems').get(protect, getMyItems);
router.route('/:id').get(getItemById);

export default router;