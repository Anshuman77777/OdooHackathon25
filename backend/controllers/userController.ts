import { Request, Response } from 'express';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getProfile = (req: AuthRequest, res: Response) => {
  if (req.user) {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      profileImage: req.user.profileImage,
      role: req.user.role,
      points: req.user.points,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// @desc    Get all users (Admin only)
// @route   GET /api/users
// @access  Private/Admin
const getAllUsers = (req: Request, res: Response) => {
  res.status(501).json({ message: 'getAllUsers not implemented yet' });
};

export { getProfile, getAllUsers };