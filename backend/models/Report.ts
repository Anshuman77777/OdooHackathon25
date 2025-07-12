import mongoose, { Document, Schema } from 'mongoose';

export interface IReport extends Document {
  reportedBy: mongoose.Schema.Types.ObjectId;
  itemId: mongoose.Schema.Types.ObjectId;
  reason: string;
  status: 'pending' | 'resolved' | 'rejected';
  createdAt: Date;
}

const ReportSchema: Schema = new Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'resolved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

const Report = mongoose.model<IReport>('Report', ReportSchema);

export default Report;