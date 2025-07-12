import mongoose, { Document } from 'mongoose';

export interface IItem extends Document {
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  uploaderId: mongoose.Types.ObjectId;
  status: 'available' | 'pending' | 'swapped' | 'removed';
  approved: boolean;
}

const itemSchema = new mongoose.Schema<IItem>(
  {
    title: { type: String, required: true },
    description: String,
    category: String,
    type: String,
    size: String,
    condition: String,
    tags: [String],
    images: [String],
    uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['available', 'pending', 'swapped', 'removed'], default: 'available' },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IItem>('Item', itemSchema);
