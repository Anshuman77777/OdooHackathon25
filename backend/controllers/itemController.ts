import { Request, Response } from 'express';
import Item from '../models/Item';

export const createItem = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    const imagePaths = files.map(file => `/uploads/${file.filename}`);

    const newItem = await Item.create({
      ...req.body,
      images: imagePaths,
      uploaderId: req.user?.id,
      status: 'available',
      approved: false
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Item creation failed' });
  }
};

export const getAllItems = async (_req: Request, res: Response) => {
  try {
    const items = await Item.find({ approved: true, status: 'available' });
    res.json(items);
  } catch {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch {
    res.status(404).json({ error: 'Item not found' });
  }
};

export const getMyItems = async (req: Request, res: Response) => {
  try {
    const items = await Item.find({ uploaderId: req.user?.id });
    res.json(items);
  } catch {
    res.status(500).json({ error: 'Failed to fetch your items' });
  }
};
