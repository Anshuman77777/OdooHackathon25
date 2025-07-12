import mongoose, { Document } from 'mongoose';

export interface IRedemption extends Document {
  userId: mongoose.Types.ObjectId;
  itemId: mongoose.Types.ObjectId;
  pointsSpent: number;
  status: string;
}

const redemptionSchema = new mongoose.Schema<IRedemption>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    pointsSpent: { type: Number, required: true },
    status: { type: String, enum: ['requested', 'completed', 'cancelled'], default: 'requested' },
  },
  { timestamps: true }
);

export default mongoose.model<IRedemption>('Redemption', redemptionSchema);
