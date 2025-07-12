import { Request, Response } from 'express';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

// @desc    Redeem an item using points
// @route   POST /api/redemptions
// @access  Private
const redeemItem = (req: AuthRequest, res: Response) => {
  res.status(501).json({ message: 'redeemItem not implemented yet' });
};

// @desc    Get redemptions by current user
// @route   GET /api/redemptions/myredemptions
// @access  Private
const getMyRedemptions = (req: AuthRequest, res: Response) => {
  res.status(501).json({ message: 'getMyRedemptions not implemented yet' });
};

export { redeemItem, getMyRedemptions };