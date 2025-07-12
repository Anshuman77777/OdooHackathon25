import { Request, Response } from 'express';
import Item from '../models/Item';

export const getPendingItems = async (_req: Request, res: Response) => {
  try {
    const items = await Item.find({ approved: false });
    res.json(items);
  } catch {
    res.status(500).json({ error: 'Failed to fetch pending items' });
  }
};

export const approveItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    res.json(item);
  } catch {
    res.status(500).json({ error: 'Approval failed' });
  }
};

export const rejectItem = async (req: Request, res: Response) => {
  try {
    const item = await Item.findByIdAndUpdate(
      req.params.id,
      { approved: false, status: 'removed' },
      { new: true }
    );
    res.json(item);
  } catch {
    res.status(500).json({ error: 'Rejection failed' });
  }
};
