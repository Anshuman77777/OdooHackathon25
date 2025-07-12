import { Request, Response } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Please enter all fields' });
    return;
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  const user = await User.create({
    name,
    email,
    passwordHash: password, // password will be hashed in pre-save hook
  }) as typeof User.prototype & { _id: any };

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      points: user.points,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(400).json({ message: 'Invalid user data' });
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }) as (typeof User.prototype & { _id: any });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      points: user.points,
      token: generateToken(user._id.toString()),
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
};

export { signup, login };