import { Request, Response } from 'express';
import Redemption from '../models/Redemption';
import Item from '../models/Item';
import User from '../models/User';

export const redeemItem = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id);
    const item = await Item.findById(req.body.itemId);
    const pointsRequired = 50;

    if (!user || user.points < pointsRequired) {
      return res.status(400).json({ error: 'Insufficient points' });
    }

    user.points -= pointsRequired;
    await user.save();

    const redemption = await Redemption.create({
      userId: user._id,
      itemId: item?._id,
      pointsSpent: pointsRequired,
      status: 'requested',
    });

    res.status(201).json(redemption);
  } catch {
    res.status(500).json({ error: 'Redemption failed' });
  }
};

export const getMyRedemptions = async (req: Request, res: Response) => {
  try {
    const redemptions = await Redemption.find({ userId: req.user?.id });
    res.json(redemptions);
  } catch {
    res.status(500).json({ error: 'Failed to fetch redemptions' });
  }
};
