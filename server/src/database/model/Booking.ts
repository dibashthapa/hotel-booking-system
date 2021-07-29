import { Schema, model, Document } from 'mongoose';
import Room from './Room';
import User from './User';
export const DOCUMENT_NAME = 'Booking';
export const COLLECTION_NAME = 'bookings';

export default interface Booking extends Document {
  room: Room;
  checkinDate: Date;
  checkoutDate: Date;
  createdBy: User;
  location: string;
  roomCount: number;
  adultCount: number;
  totalCharge: number;
  childrenCount: number;
}

const schema = new Schema(
  {
    room: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: true,
    },
    checkinDate: {
      type: Date,
      required: true,
    },
    checkoutDate: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      select: false,
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
    totalCharge: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  { versionKey: false },
);
export const BookingModel = model<Booking>(DOCUMENT_NAME, schema, COLLECTION_NAME);
