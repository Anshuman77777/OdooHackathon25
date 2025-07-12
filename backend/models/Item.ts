import mongoose, { Document, Schema } from 'mongoose';

export interface IItem extends Document {
  title: string;
  description: string;
  category: string;
  type: string;
  size: string;
  condition: string;
  tags: string[];
  images: string[];
  uploaderId: mongoose.Schema.Types.ObjectId;
  status: 'available' | 'swapped' | 'redeemed';
  approved: boolean;
  createdAt: Date;
}

const ItemSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: String, required: true },
  condition: { type: String, required: true },
  tags: [{ type: String }],
  images: [{ type: String }],
  uploaderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['available', 'swapped', 'redeemed'], default: 'available' },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model<IItem>('Item', ItemSchema);

export default Item;