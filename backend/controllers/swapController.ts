import { Request, Response } from 'express';
import Swap from '../models/Swap';

export const requestSwap = async (req: Request, res: Response) => {
  try {
    const swap = await Swap.create({
      ...req.body,
      requesterId: req.user?.id,
      status: 'pending',
    });
    res.status(201).json(swap);
  } catch {
    res.status(500).json({ error: 'Swap request failed' });
  }
};

export const getMySwaps = async (req: Request, res: Response) => {
  try {
    const swaps = await Swap.find({
      $or: [{ requesterId: req.user?.id }, { responderId: req.user?.id }],
    });
    res.json(swaps);
  } catch {
    res.status(500).json({ error: 'Failed to fetch swaps' });
  }
};

export const updateSwapStatus = async (req: Request, res: Response) => {
  try {
    const swap = await Swap.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(swap);
  } catch {
    res.status(500).json({ error: 'Failed to update swap status' });
  }
};
