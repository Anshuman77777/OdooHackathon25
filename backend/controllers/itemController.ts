import { Request, Response } from 'express';
import { IUser } from '../models/User';

interface AuthRequest extends Request {
  user?: IUser;
}

// @desc    Create a new item
// @route   POST /api/items
// @access  Private
const createItem = (req: AuthRequest, res: Response) => {
  res.status(501).json({ message: 'createItem not implemented yet' });
};

// @desc    Get all items
// @route   GET /api/items
// @access  Public
const getAllItems = (req: Request, res: Response) => {
  res.status(501).json({ message: 'getAllItems not implemented yet' });
};

// @desc    Get item by ID
// @route   GET /api/items/:id
// @access  Public
const getItemById = (req: Request, res: Response) => {
  res.status(501).json({ message: 'getItemById not implemented yet' });
};

// @desc    Get items uploaded by current user
// @route   GET /api/items/myitems
// @access  Private
const getMyItems = (req: AuthRequest, res: Response) => {
  res.status(501).json({ message: 'getMyItems not implemented yet' });
};

export { createItem, getAllItems, getItemById, getMyItems };