import { Request, Response } from 'express';

// @desc    Get all pending items for approval
// @route   GET /api/admin/items/pending
// @access  Private/Admin
const getPendingItems = (req: Request, res: Response) => {
  res.status(501).json({ message: 'getPendingItems not implemented yet' });
};

// @desc    Approve an item
// @route   PUT /api/admin/items/:id/approve
// @access  Private/Admin
const approveItem = (req: Request, res: Response) => {
  res.status(501).json({ message: 'approveItem not implemented yet' });
};

// @desc    Reject an item
// @route   PUT /api/admin/items/:id/reject
// @access  Private/Admin
const rejectItem = (req: Request, res: Response) => {
  res.status(501).json({ message: 'rejectItem not implemented yet' });
};

export { getPendingItems, approveItem, rejectItem };