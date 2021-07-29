import { Schema, model, Document } from 'mongoose';
import User from './User';
export const DOCUMENT_NAME = 'Booking';
export const COLLECTION_NAME = 'bookings';

export default interface Booking extends Document {
  createdBy: User;
  startDate: Date;
  endDate: Date;
  location: string;
  roomCount: number;
  adultCount: number;
  childrenCount: number;
}

const schema = new Schema(
  {
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: Schema.Types.String,
      required: true,
    },
    roomCount: {
      type: Schema.Types.Number,
      required: true,
    },
    adultCount: {
      type: Schema.Types.Number,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);
export const BookingModel = model<Booking>(DOCUMENT_NAME, schema, COLLECTION_NAME);
