import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  id: string;
  role: 'user' | 'admin';
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  next();
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ error: 'No token, access denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
//     req.user = { id: decoded.id, role: decoded.role };
//     next();
//   } catch {
//     return res.status(401).json({ error: 'Invalid or expired token' });
//   }
// };

// export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
//   if (req.user?.role !== 'admin') {
//     return res.status(403).json({ error: 'Admin access required' });
//   }
  next();
};
