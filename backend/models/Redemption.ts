import mongoose, { Document, Schema } from 'mongoose';

export interface IRedemption extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  itemId: mongoose.Schema.Types.ObjectId;
  pointsSpent: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

const RedemptionSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  pointsSpent: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Redemption = mongoose.model<IRedemption>('Redemption', RedemptionSchema);

export default Redemption;