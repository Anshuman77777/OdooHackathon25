import { Request, Response } from 'express';
import User from '../models/User';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user?.id).select('-passwordHash');
    res.json(user);
  } catch {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select('-passwordHash');
    res.json(users);
  } catch {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
