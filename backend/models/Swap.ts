import mongoose, { Document } from 'mongoose';

interface IMessage {
  senderId: mongoose.Types.ObjectId;
  message: string;
  timestamp: Date;
}

export interface ISwap extends Document {
  requesterId: mongoose.Types.ObjectId;
  responderId: mongoose.Types.ObjectId;
  requesterItemId: mongoose.Types.ObjectId;
  responderItemId: mongoose.Types.ObjectId;
  status: string;
  messages: IMessage[];
}

const swapSchema = new mongoose.Schema<ISwap>(
  {
    requesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    responderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    requesterItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    responderItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined', 'completed', 'cancelled'], default: 'pending' },
    messages: [
      {
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        message: String,
        timestamp: { type: Date, default: Date.now }
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model<ISwap>('Swap', swapSchema);
