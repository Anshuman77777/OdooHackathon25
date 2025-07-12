import mongoose, { Document, Schema } from 'mongoose';

export interface ISwap extends Document {
  requesterId: mongoose.Schema.Types.ObjectId;
  responderId: mongoose.Schema.Types.ObjectId;
  requesterItemId: mongoose.Schema.Types.ObjectId;
  responderItemId: mongoose.Schema.Types.ObjectId;
  status: 'pending' | 'accepted' | 'rejected' | 'completed';
  messages: { senderId: mongoose.Schema.Types.ObjectId; message: string; timestamp: Date }[];
  createdAt: Date;
}

const SwapSchema: Schema = new Schema({
  requesterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  responderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requesterItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  responderItemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected', 'completed'], default: 'pending' },
  messages: [
    {
      senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      message: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Swap = mongoose.model<ISwap>('Swap', SwapSchema);

export default Swap;